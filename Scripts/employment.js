/**********************************************************************
******                           Load jobs                     ******
**********************************************************************/
async function loadJobs() {
    try {
        const res = await fetch('./Scripts/Data/jobs.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        jobDetails = await res.json();

    } catch (err) {
        console.error('Failed to load jobDetails.json:', err);
        document.getElementById('jobContainer').textContent = 'Could not load jobs.';
    }
}


/**********************************************************************
******                      Helper Functions                      ******
**********************************************************************/
function formatDateObj(dateString) {
    if (!dateString || /present/i.test(dateString)) return new Date();
    return new Date(dateString);
}

function formatDateString(dateString) {
    const options = { year: 'numeric', month: 'short' };
    const date = formatDateObj(dateString);

    if (date == new Date()) return 'Present';
    else return date.toLocaleDateString('en-US', options);
}


function calculateDuration(startDate, endDate) {
    const start = formatDateObj(startDate);
    const end = formatDateObj(endDate);
    const diffTime = Math.max(0, end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const remainingDays = diffDays % 30;

    let parts = [];
    if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
    if (remainingDays > 0 || parts.length === 0) parts.push(`${remainingDays} day${remainingDays !== 1 ? 's' : ''}`);

    return parts.join(', ');
}

function bindFields(root, map) {
    for (const [key, val] of Object.entries(map)) {
        root.querySelectorAll(`[data-bind="${key}"]`).forEach(el => {
            el.textContent = val ?? '';
        });
    }
}

/**********************************************************************
******                      Search & Filter                       ******
**********************************************************************/
function searchJobs(jobsArr, searchTerm) {
    if (!searchTerm?.trim()) return jobsArr;

    const term = searchTerm.toLowerCase();
    return jobsArr.filter(job => {
        const bullets = job.bulletPoints ?? [];
        const searchableText = [
            job.title, job.company, job.department, job.location, job.positionType, job.status,
            job.summary,
            ...bullets,
            ...(job.achievements || []),
            ...(job.tags || [])
        ].filter(Boolean).join(' ').toLowerCase();

        return searchableText.includes(term);
    });
}

function handleSearch() {
    currentSearchTerm = document.getElementById('searchInput').value;
    applyFiltersAndSorting();
}

/**********************************************************************
******                      Card Creation                         ******
**********************************************************************/
function createJobCard(job) {
    const tpl = document.getElementById('job-card-tpl').content.cloneNode(true);
    const card = tpl.querySelector('.job-card');

    const dateRange = `${formatDateString(job.startDate)} - ${formatDateString(job.endDate)}`;
    const duration = calculateDuration(job.startDate, job.endDate);

    bindFields(card, {
        title: job.title,
        company: job.company,
        dateRange,
        duration
    });

    const bulletList = card.querySelector('[data-bind="bullets"]');
    if (bulletList) {
        bulletList.innerHTML = '';
        const bullets = job.bulletPoints ?? [];
        bullets.forEach(text => {
            if (text && text.trim()) {
                const li = document.createElement('li');
                li.textContent = text;
                bulletList.appendChild(li);
            }
        });
    }

    card.addEventListener('click', () => showInfoCard(job));
    return card;
}

/**********************************************************************
******                      Rendering                             ******
**********************************************************************/
function renderJobs(jobsToRender) {
    const container = document.getElementById('jobContainer');
    container.innerHTML = '';

    if (!jobsToRender.length) {
        container.innerHTML =
            '<div style="text-align:center;padding:40px;color:#666;background:white;border-radius:15px;margin:20px 0;">' +
            '<h3>No positions found</h3><p>Try adjusting your search terms or filters.</p></div>';
        return;
    }

    const frag = document.createDocumentFragment();
    jobsToRender.forEach(job => {
        frag.appendChild(createJobCard(job));
    });
    container.appendChild(frag);
}

/**********************************************************************
******                      Sorting & Options                     ******
**********************************************************************/
function selectSort(sortType) {
    const sortOptions = {
        endDate: 'Sort by End Date',
        startDate: 'Sort by Start Date',
        duration: 'Sort by Employment Length',
        company: 'Sort by Company'
    };
    currentSort = sortType;
    const selected = document.getElementById('selectedSort');
    if (selected) selected.textContent = sortOptions[sortType];
    toggleDropdown();
    applyFiltersAndSorting();
}

function toggleOrder() {
    isDescending = !isDescending;
    const btn = document.getElementById('orderBtn');
    if (btn) btn.textContent = isDescending ? '▼' : '▲';
    applyFiltersAndSorting();
}

function applyFiltersAndSorting() {
    let filteredJobs = searchJobs(jobDetails, currentSearchTerm);

    filteredJobs.sort((a, b) => {
        let valueA, valueB;
        switch (currentSort) {
            case 'endDate':
                valueA = formatDateObj(a.endDate);
                valueB = formatDateObj(b.endDate);
                break;
            case 'startDate':
                valueA = formatDateObj(a.startDate);
                valueB = formatDateObj(b.startDate);
                break;
            case 'duration':
                valueA = Math.abs(formatDateObj(a.endDate) - formatDateObj(a.startDate));
                valueB = Math.abs(formatDateObj(b.endDate) - formatDateObj(b.startDate));
                break;
            case 'company':
                valueA = (a.company || '').toLowerCase();
                valueB = (b.company || '').toLowerCase();
                return isDescending ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
        }
        return isDescending ? valueB - valueA : valueA - valueB;
    });

    renderJobs(filteredJobs);
}

/**********************************************************************
******                      Dropdown & Global Clicks              ******
**********************************************************************/
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown) dropdown.classList.toggle('show');
}

document.addEventListener('click', (event) => {
    const overlay = document.getElementById('infoCardOverlay');
    if (overlay?.classList.contains('active') && event.target === overlay) {
        event.stopPropagation();
        event.preventDefault();
        hideInfoCard();
    }
});

window.addEventListener('click', (event) => {
    // close sort dropdown on outside click
    if (!event.target.closest('.dropdown-container')) {
        const dropdown = document.getElementById('dropdownMenu');
        if (dropdown?.classList.contains('show')) dropdown.classList.remove('show');
    }
});

document.addEventListener('keydown', (event) => {
    const overlay = document.getElementById('infoCardOverlay');
    if (event.key === 'Escape' && overlay && overlay.classList.contains('active')) {
        hideInfoCard();
    }
});



/**********************************************************************
******                      Info Card (Open/Close)                ******
**********************************************************************/
function showInfoCard(job) {
    if (!job) return;

    document.getElementById('infoCardTitle').textContent = job.title || '';
    document.getElementById('infoCardCompany').textContent = job.company || '';
    document.getElementById('infoCardDepartment').textContent = job.department || '';
    document.getElementById('infoCardLocation').textContent = job.location || '';
    document.getElementById('infoCardPositionType').textContent = job.positionType || '';
    document.getElementById('infoCardDateRange').textContent =
        `${formatDateString(job.startDate)} - ${formatDateString(job.endDate)}`;
    document.getElementById('infoCardDuration').textContent =
        calculateDuration(job.startDate, job.endDate);

    const infoCardStatus = document.getElementById('infoCardStatus');
    const isCompleted = /completed/i.test(job.status || '');
    infoCardStatus.textContent = isCompleted ? 'Completed' : 'Current';
    infoCardStatus.className = `status-badge ${isCompleted ? 'status-completed' : 'status-current'}`;

    const summaryEl = document.getElementById('infoCardSummary');
    const summaryText = (job.summary && String(job.summary).trim())
        ? job.summary.trim()
        : (Array.isArray(job.bulletPoints) ? job.bulletPoints.filter(Boolean).join(' ') : '');
    summaryEl.textContent = summaryText;

    const achievementsSection = document.getElementById('infoCardAchievementsSection');
    const achievementsList = document.getElementById('infoCardAchievements');
    if (job.achievements?.length) {
        achievementsSection.style.display = 'block';
        achievementsList.innerHTML = job.achievements.map(a => `<li>${a}</li>`).join('');
    } else {
        achievementsSection.style.display = 'none';
    }

    const overlay = document.getElementById('infoCardOverlay');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
}

function hideInfoCard() {
    const overlay = document.getElementById('infoCardOverlay');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
}

/**********************************************************************
******                      Scroll Animations                     ******
**********************************************************************/
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target;
            if (target.classList.contains('bottom-bar')) {
                const endLogo = target.querySelector('.end-logo');
                const endTitle = target.querySelector('.end-title');
                const endSubtitle = target.querySelector('.end-subtitle');
                const socialList = target.querySelector('.social-list');

                if (entry.isIntersecting) {
                    endLogo?.classList.add('animate');
                    endTitle?.classList.add('animate');
                    endSubtitle?.classList.add('animate');
                    socialList?.classList.add('animate');
                } else {
                    endLogo?.classList.remove('animate');
                    endTitle?.classList.remove('animate');
                    endSubtitle?.classList.remove('animate');
                    socialList?.classList.remove('animate');
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '50px 0px -50px 0px' });

    const bottomBar = document.querySelector('.bottom-bar');
    if (bottomBar) observer.observe(bottomBar);
}

/**********************************************************************
******                      Initialization                       ******
**********************************************************************/
let currentSort = 'endDate';
let isDescending = true;
let currentSearchTerm = '';
let jobDetails = null;

document.addEventListener('DOMContentLoaded', async () => {
    await loadJobs();                 // Load Job
    applyFiltersAndSorting(); 
    setupScrollAnimations();
});
