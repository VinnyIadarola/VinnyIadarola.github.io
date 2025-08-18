
/**********************************************************************
******                     Project Data                          ******
**********************************************************************/
const projects = [
    {
        id: 1,
        name: "My Website",
        icon: "<img src='Images/website_project_picture.png' alt='My Website Project'>",
        tags: ["HTML", "JavaScript", "CSS", "Github Pages"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 2,
        name: "Beyond The Trench",
        icon: "<img src='Images/' alt='Beyond The Trench'>",
        tags: ["C++", "SDL3", "UI"],
        description: "TDB ",
        github: "https://github.com/VinnyIadarola/PastTheTrench"
    },
    {
        id: 3,
        name: "FIFO and LIFO",
        icon: "<img src='Images/' alt='FIFO and LIFO'>",
        tags: ["System Verilog", "Digital Logic", "Synthesizable", "Data Structures", "Testbench"],
        description: "TDB ".repeat(100).trim(),
        github: "https://github.com/VinnyIadarola/FIFO-and-LIFO"
    },
    {
        id: 4,
        name: "Small Simple Matrix Multiplier",
        icon: "<img src='Images/' alt='Matrix Multiplier Project'>",
        tags: ["System Verilog", "Digital Logic", "Synthesizable", "Testbench"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 5,
        name: "Processecor ",
        icon: "<img src='Images/MeandDooman.jpg' alt='Java Project'>",
        tags: ["Java"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 6,
        name: "TBD_6",
        icon: "<img src='Images/MeandDooman.jpg' alt='MATLAB Project'>",
        tags: ["MATLAB"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 7,
        name: "TBD_7",
        icon: "<img src='Images/MeandDooman.jpg' alt='HTML Project'>",
        tags: ["C"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 8,
        name: "TBD_8",
        icon: "<img src='Images/MeandDooman.jpg' alt='JavaScript Project'>",
        tags: ["Python"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 9,
        name: "TBD_9",
        icon: "<img src='Images/MeandDooman.jpg' alt='Rust Project'>",
        tags: ["Rust"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 10,
        name: "TBD_10",
        icon: "<img src='Images/MeandDooman.jpg' alt='CUDA Project'>",
        tags: ["CUDA"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 11,
        name: "TBD_11",
        icon: "<img src='Images/MeandDooman.jpg' alt='Verilog Project'>",
        tags: ["Verilog"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    },
    {
        id: 12,
        name: "TBD_12",
        icon: "<img src='Images/MeandDooman.jpg' alt='VHDL Project'>",
        tags: ["VHDL"],
        description: "TDB ".repeat(100).trim(),
        github: "#"
    }
];

/**********************************************************************
******                     Global Variables                      ******
**********************************************************************/
const allTags = [...new Set(projects.flatMap(project => project.tags))];
let selectedTags = [];
let filteredProjects = [...projects];

/**********************************************************************
******                     Initialize App                        ******
**********************************************************************/
function init() {
    renderAllTags();
    renderProjects();
    setupEventListeners();
    setupScrollAnimations();
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
    
    filteredProjects = projects.filter(project => {
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
            const project = projects.find(p => p.id === projectId);
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
                ? (window.scrollY > target.offsetTop ? 600 : Math.random()*60)
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
******                     Initialize                            ******
**********************************************************************/
init();