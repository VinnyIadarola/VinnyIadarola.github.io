/**********************************************************************
******                      Job Data                             ******
**********************************************************************/
const jobs = [
    {
        title: "ECE In-Class Peer Mentor",
        company: "UW-Madison Engineering Department",
        department: "Education",
        location: "Madison, WI",
        positionType: "Part-time Position",
        startDate: "2024-01-01",
        endDate: "",
        status: "current",
        bulletPoints: [
            "Guided students through computer lab assignments",
            "Maintained accurate attendance and progress records",
            "Hosted make-up exams and organized study groups"
        ],
        summary: "I took on this role Supported engineering students in lab environments, tracking progress and facilitating additional learning opportunities.",
        achievements: [
            "Received recognition from faculty for mentoring excellence",
            "Increased student lab completion rates through targeted support",
            "Successfully hosted multiple study sessions with high attendance"
        ],
        tags: ["education","engineering","peer mentor","student support","record keeping","labs"]
    },
    {
        title: "Inpatient Unit Assistant",
        company: "UW-Health American Family Children's Hospital",
        department: "Healthcare",
        location: "Madison, WI",
        positionType: "Volunteer",
        startDate: "2024-05-01",
        endDate: "2025-05-01",
        status: "completed",
        bulletPoints: [
            "Provided compassionate care to pediatric patients and their families",
            "Collaborated with nursing staff to maintain optimal patient environments",
            "Documented patient behaviors and communicated effectively with healthcare teams",
            "Ensured patient comfort through personalized resource allocation",
            "Cleaned and sanitized medical equipment and toys in dedicated facilities",
            "On-call every Saturday to teach algebra through calculus to patients when needed"
        ],
        summary: "Provided compassionate, family-centered support on a pediatric inpatient unit; collaborated with nurses to prepare rooms for specific precautions; maintained patient comfort through timely resources; taught mathematics to patients when possible; and documented behaviors to support care plans.",
        achievements: [
            "Recognized by staff for exceptional family engagement and patient care",
            "Contributed to improved patient morale through personalized interactions",
            "Maintained perfect on-call attendance for Saturday math tutoring"
        ],
        tags: ["healthcare","patient care","nursing","medical","hospital","pediatric","children","family support","comfort care","behavioral assessment","tutoring","math"]
    },
    {
        title: "Physical Training Instructor and Fire Team Leader",
        company: "Marine Corps Madison Platoon",
        department: "OCS Military Prep",
        location: "Madison, WI",
        positionType: "Part-time Position",
        startDate: "2024-09-01",
        endDate: "2025-05-01",
        status: "completed",
        bulletPoints: [
            "Planned and led physical training sessions for 30 individuals",
            "Developed personalized fitness improvement plans",
            "Maintained attendance and performance records for the Platoon Commander"
        ],
        summary: "Organizes and leads physical training for Marine Corps recruits, tracking attendance and progress while developing individualized improvement plans.",
        achievements: [
            "Improved average platoon fitness scores by 15%",
            "Successfully prepared multiple candidates for Marine Corps selection",
            "Commended by Platoon Commander for leadership"
        ],
        tags: ["military","training","fitness","leadership","records management","recruit preparation"]
    },
    {
        title: "Fraternity Academic Chair",
        company: "Kappa Eta Kappa",
        department: "Professional Fraternity",
        location: "Madison, WI",
        positionType: "Elected Fraternity",
        startDate: "2024-07-01",
        endDate: "2024-12-31",
        status: "completed",
        bulletPoints: [
            "Led team warm-ups and taught wrestling techniques",
            "Prepared the team for tournaments and competitive matches",
            "Ensured safety and maintained discipline during training and events"
        ],
        summary: "Directed and instructed youth wrestlers, overseeing training sessions, safety protocols, and tournament preparation for over 150 volunteer hours.",
        achievements: [
            "Trained multiple wrestlers who advanced to regional competitions",
            "Improved team performance metrics over two seasons",
            "Recognized for dedication to youth sports development"
        ],
        tags: ["sports","youth","coaching","team leadership","athletics","wrestling","training","volunteer"]
    },
    {
        title: "Fraternity Parlimentarian",
        company: "Kappa Eta Kappa",
        department: "Professional Fraternity",
        location: "Madison, WI",
        positionType: "Elected Fraternity",
        startDate: "2024-07-01",
        endDate: "2024-12-31",
        status: "completed",
        bulletPoints: [
            "Led team warm-ups and taught wrestling techniques",
            "Prepared the team for tournaments and competitive matches",
            "Ensured safety and maintained discipline during training and events"
        ],
        summary: "Directed and instructed youth wrestlers, overseeing training sessions, safety protocols, and tournament preparation for over 150 volunteer hours.",
        achievements: [
            "Trained multiple wrestlers who advanced to regional competitions",
            "Improved team performance metrics over two seasons",
            "Recognized for dedication to youth sports development"
        ],
        tags: ["sports","youth","coaching","team leadership","athletics","wrestling","training","volunteer"]
    },

    {
        title: "Engineering Expo Lead",
        company: "Kappa Eta Kappa Engineering Fraternity",
        department: "STEM Outreach",
        location: "Madison, WI",
        positionType: "Part-time Position",
        startDate: "2023-09-01",
        endDate: "2024-05-01",
        status: "completed",
        bulletPoints: [
            "Led a 15-person team to develop and present an engineering project",
            "Improved processes and reduced costs through recommendations",
            "Gathered and organized resources for project success"
        ],
        summary: "Directed a large-scale engineering project from concept to presentation, leading a team to process improvements and cost reductions.",
        achievements: [
            "Won election to lead engineering expo project",
            "Achieved cost reduction goals while maintaining quality",
            "Received positive feedback from expo attendees"
        ],
        tags: ["engineering","leadership","project management","team coordination","process improvement","cost reduction"]
    },
            {
        title: "Dining Hall Team Member",
        company: "University of Wisconsin-Madison",
        department: "Dining",
        location: "Madison, WI",
        positionType: "Part-time Position",
        startDate: "2023-09-01",
        endDate: "2024-05-01",
        status: "completed",
        bulletPoints: [
            "Led a 15-person team to develop and present an engineering project",
            "Improved processes and reduced costs through recommendations",
            "Gathered and organized resources for project success"
        ],
        summary: "Directed a large-scale engineering project from concept to presentation, leading a team to process improvements and cost reductions.",
        achievements: [
            "Won election to lead engineering expo project",
            "Achieved cost reduction goals while maintaining quality",
            "Received positive feedback from expo attendees"
        ],
        tags: ["engineering","leadership","project management","team coordination","process improvement","cost reduction"]
    },
    {
        title: "Chinese Honors Association Tutor",
        company: "Chinese Honors Association",
        department: "Education",
        location: "Santa Ana, CA",
        positionType: "Volunteer",
        startDate: "2019-01-01",
        endDate: "2020-12-31",
        status: "completed",
        bulletPoints: [
            "Tutored students in Chinese language, history, and culture",
            "Taught traditional art forms such as calligraphy",
            "Supported students in preparing for academic competitions"
        ],
        summary: "Provided tutoring in Chinese language, history, and calligraphy, helping underclassmen improve academic performance and cultural understanding.",
        achievements: [
            "Helped students achieve top scores in Chinese language competitions",
            "Introduced new calligraphy techniques to the curriculum",
            "Expanded cultural learning opportunities for members"
        ],
        tags: ["education","Chinese language","history","calligraphy","tutoring","culture","volunteer"]
    },

    {
        title: "Math Tutor",
        company: "Cielo Vista Elementary School",
        department: "Education",
        location: "Rancho Santa Margarita, CA",
        positionType: "Volunteer",
        startDate: "2017-01-01",
        endDate: "2019-12-31",
        status: "completed",
        bulletPoints: [
            "Taught basic mathematics to children in both Spanish and English",
            "Assisted students with English homework assignments",
            "Encouraged academic confidence through patient, individualized instruction"
        ],
        summary: "Provided bilingual tutoring in math and English, fostering academic growth and confidence among elementary students for 270 volunteer hours.",
        achievements: [
            "Helped several students advance a full grade level in math proficiency",
            "Recognized by teachers for exceptional bilingual teaching skills",
            "Contributed to improved test scores in targeted classrooms"
        ],
        tags: ["education","math","tutoring","bilingual","Spanish","English","youth","elementary school","volunteer"]
    },
    {
        title: "Volunteer Youth Wrestling Team Leader",
        company: "Youth Wrestling Club",
        department: "Sports & Recreation",
        location: "San Clemente, CA",
        positionType: "Volunteer",
        startDate: "2016-01-01",
        endDate: "2018-12-31",
        status: "completed",
        bulletPoints: [
            "Led team warm-ups and taught wrestling techniques",
            "Prepared the team for tournaments and competitive matches",
            "Ensured safety and maintained discipline during training and events"
        ],
        summary: "Directed and instructed youth wrestlers, overseeing training sessions, safety protocols, and tournament preparation for over 150 volunteer hours.",
        achievements: [
            "Trained multiple wrestlers who advanced to regional competitions",
            "Improved team performance metrics over two seasons",
            "Recognized for dedication to youth sports development"
        ],
        tags: ["sports","youth","coaching","team leadership","athletics","wrestling","training","volunteer"]
    }



    
];
/**********************************************************************
******                      UI State                             ******
**********************************************************************/
let currentSort = 'endDate';
let isDescending = true;
let currentSearchTerm = '';

/**********************************************************************
******                      Helper Functions                      ******
**********************************************************************/
function parseMaybeDate(dateString) {
    if (!dateString || /present/i.test(dateString)) return new Date();
    return new Date(dateString);
}

function formatDate(dateString) {
    if (!dateString || /present/i.test(dateString)) return 'Present';
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function calculateDuration(startDate, endDate) {
    const start = parseMaybeDate(startDate);
    const end = parseMaybeDate(endDate);
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

    const dateRange = `${formatDate(job.startDate)} - ${formatDate(job.endDate)}`;
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
function renderJobs(jobsToRender = jobs) {
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
    let filteredJobs = searchJobs(jobs, currentSearchTerm);

    filteredJobs.sort((a, b) => {
        let valueA, valueB;
        switch (currentSort) {
            case 'endDate':
                valueA = parseMaybeDate(a.endDate);
                valueB = parseMaybeDate(b.endDate);
                break;
            case 'startDate':
                valueA = parseMaybeDate(a.startDate);
                valueB = parseMaybeDate(b.startDate);
                break;
            case 'duration':
                valueA = Math.abs(parseMaybeDate(a.endDate) - parseMaybeDate(a.startDate));
                valueB = Math.abs(parseMaybeDate(b.endDate) - parseMaybeDate(b.startDate));
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

// Simple overlay click handler like in projects.js
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
        `${formatDate(job.startDate)} - ${formatDate(job.endDate)}`;
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
******                      Init                                  ******
**********************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    applyFiltersAndSorting(); // initial sort + render
    setupScrollAnimations();
});

/**********************************************************************
******                      Utility                                ******
**********************************************************************/
function addJob(jobData) {
    jobs.push(jobData);
    applyFiltersAndSorting();
}