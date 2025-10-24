
/**********************************************************************
******                           Load Projects                     ******
**********************************************************************/
async function loadProjects() {
    try {
        const res = await fetch('./Scripts/Data/projects.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        projectDetails = await res.json();

    } catch (err) {
        console.error('Failed to load projectDetails.json:', err);
        document.getElementById('projectsGrid').textContent = 'Could not load projects.';
    }
}


/**********************************************************************
******                     Render Functions                      ******
**********************************************************************/
function renderAllTags() {
    const allTagsContainer = document.getElementById('allTags');
    const availableTags = allTags.filter(tag => !selectedTags.includes(tag));
    allTagsContainer.innerHTML = availableTags.map(tag => 
        `<span class="tag" data-tag="${tag}">${tag}</span>`
    ).join('');
}

function renderSelectedTags() {
    const selectedTagsContainer = document.getElementById('selectedTags');
    if (selectedTags.length === 0) {
        selectedTagsContainer.innerHTML = '<div class="empty-tags">No tags selected</div>';
    } else {
        selectedTagsContainer.innerHTML = selectedTags.map(tag => 
            `<span class="tag selected" data-tag="${tag}">${tag}</span>`
        ).join('');
    }
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-image">
                ${project.icon}
            </div>
            <div class="project-info">
                <div class="project-name">${project.name}</div>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    setTimeout(setupScrollAnimations, 100);
}

/**********************************************************************
******                     Filter Functions                      ******
**********************************************************************/
function filterProjects() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    
    filteredProjects = projectDetails.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchTerm) || 
                            project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const matchesTags = selectedTags.length === 0 || 
                            selectedTags.every(tag => project.tags.includes(tag));
        return matchesSearch && matchesTags;
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.add('shrinking');
    });

    setTimeout(() => {
        renderProjects();
    }, 300);
}

/**********************************************************************
******                     Event Listeners                       ******
**********************************************************************/
function setupEventListeners() {
    /*********** Tag Selection ***********/
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            const tag = e.target.dataset.tag;
            if (e.target.classList.contains('selected')) {
                selectedTags = selectedTags.filter(t => t !== tag);
            } else {
                if (!selectedTags.includes(tag)) {
                    selectedTags.push(tag);
                }
            }
            renderSelectedTags();
            renderAllTags();
            filterProjects();
        }
    });

    /*********** Clear Tags ***********/
    document.getElementById('clearTags').addEventListener('click', () => {
        selectedTags = [];
        renderSelectedTags();
        renderAllTags();
        filterProjects();
    });

    /*********** Search ***********/
    document.getElementById('searchBar').addEventListener('input', filterProjects);

    /*********** Project infoCard ***********/
    document.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            const projectId = parseInt(projectCard.dataset.projectId);
            const project = projectDetails.find(p => p.id === projectId);
            showinfoCard(project);
        }
    });

    /*********** infoCard Close ***********/
    document.getElementById('infoCardClose').addEventListener('click', hideinfoCard);
    document.getElementById('infoCardOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) hideinfoCard();
    });
}

/**********************************************************************
******                     infoCard Functions                       ******
**********************************************************************/
function showinfoCard(project) {
    document.getElementById('infoCardImage').innerHTML = project.icon;
    document.getElementById('infoCardTitle').textContent = project.name;
    document.getElementById('infoCardDescription').textContent = project.description;
    document.getElementById('infoCardTags').innerHTML = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
    ).join('');
    
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    seeMoreBtn.onclick = () => window.open(project.github, '_blank');
    
    document.getElementById('infoCardOverlay').classList.add('active');
}

function hideinfoCard() {
    document.getElementById('infoCardOverlay').classList.remove('active');
}

/**********************************************************************
******                     Scroll Animations                     ******
**********************************************************************/
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting) {
                if (target.classList.contains('bottom-bar')) {
                    const endLogo = target.querySelector('.end-logo');
                    const endTitle = target.querySelector('.end-title');
                    const endSubtitle = target.querySelector('.end-subtitle');
                    const socialList = target.querySelector('.social-list');
                    
                    if (endLogo) endLogo.classList.add('animate');
                    if (endTitle) endTitle.classList.add('animate');
                    if (endSubtitle) endSubtitle.classList.add('animate');
                    if (socialList) socialList.classList.add('animate');
                }
                
            const delay = target.classList.contains('project-card')
                ? (window.scrollY > target.offsetTop ? 400 : Math.random()*60)
                : 0;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                }, delay);
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');

                if (target.classList.contains('bottom-bar')) {
                    const endLogo = target.querySelector('.end-logo');
                    const endTitle = target.querySelector('.end-title');
                    const endSubtitle = target.querySelector('.end-subtitle');
                    const socialList = target.querySelector('.social-list');
                    
                    if (endLogo) endLogo.classList.remove('animate');
                    if (endTitle) endTitle.classList.remove('animate');
                    if (endSubtitle) endSubtitle.classList.remove('animate');
                    if (socialList) socialList.classList.remove('animate');
                }
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
    });

    /*********** Observe Project Cards ***********/
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    /*********** Observe Bottom Bar ***********/
    const bottomBar = document.querySelector('.bottom-bar');
    if (bottomBar) {
        observer.observe(bottomBar);
    }
}




/**********************************************************************
******                 Index to project Tag handler              ******
**********************************************************************/
 async function preselectedTag() {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get('tag');
    if (!tag) return;


    if (!selectedTags.includes(tag) && allTags.includes(tag)) {
        selectedTags.push(tag);
        renderSelectedTags();
        renderAllTags();
        filterProjects();
    } 

    const grid = document.querySelector('#projectsGrid, .projects-grid, .cards-grid');
    if (grid) {
        const offset = 20000; // Adjust this value for more/less scroll
        const top = grid.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}



/**********************************************************************
******                     Global Variables                      ******
**********************************************************************/
let projectDetails = null;
let allTags = null;
let selectedTags = [];
let filteredProjects = [];



/**********************************************************************
******                     Initialize                            ******
**********************************************************************/
async function init() {
    await loadProjects();
    allTags = [...new Set(projectDetails.flatMap(project => project.tags))];
    filteredProjects = [...projectDetails];
    renderAllTags();
    preselectedTag();
    renderProjects();
    setupEventListeners();
    setupScrollAnimations();
}

init();