/**********************************************************************
******                       Book Animation                       ******
**********************************************************************/
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.falling-books');
    const numBooks  = 10;  

    for (let i = 0; i < numBooks; i++) {
        const b = document.createElement('div');
        b.className = 'book';
        b.innerHTML = '<i class="fas fa-book"></i>';

        const size = Math.random() * 2 + 2;
        b.style.fontSize = size + 'rem';

        b.style.left = Math.random() * 100 + '%';

        b.style.animationDuration = (Math.random() * 6 + 6) + 's';

        b.style.animationDelay = -Math.random() * 12 + 's';

        container.appendChild(b);
     }
});



/**********************************************************************
******                           Load Course                     ******
**********************************************************************/
async function loadCourses() {
    try {
        const res = await fetch('./Scripts/Data/courses.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        courseDetails = await res.json();

    } catch (err) {
        console.error('Failed to load courseDetails.json:', err);
        document.getElementById('coursesGrid').textContent = 'Could not load courses.';
    }
}


    
/**********************************************************************
******                   Building Course Grid                    ******
**********************************************************************/
function buildCourseGrid() {
    const grid = document.getElementById('coursesGrid');

    Object.entries(courseDetails).forEach(([id, course]) => {
        const card = document.createElement('div');
        card.className      = 'course-card';
        card.dataset.course = id;                      
        card.dataset.majors = course.majors.join(' '); 

        card.innerHTML = `
            <div class="course-name">${course.title}</div>
            <div class="course-code">${course.code}</div>
            <span class="grade ${course.grade}">${course.grade}</span>
        `;

        grid.appendChild(card);
    });
}

/**********************************************************************
******                      Filter                               ******
**********************************************************************/
function filterCourses(major) {
    activeFilter = major;

    document.querySelectorAll('.degree-card').forEach(card => {
        card.classList.toggle('active', card.dataset.major === major);
    });

    document.querySelectorAll('.course-card').forEach(card => {
        const majors = card.dataset.majors.split(' ').filter(Boolean); // Ensure no empty strings
        card.classList.toggle('hidden', majors.length === 0 || !majors.includes(major));
    });

    document.getElementById('courseInfoCard').classList.remove('active');
}

function clearFilter() {
    activeFilter = null;

    document.querySelectorAll('.degree-card').forEach(card =>
        card.classList.remove('active')
    );
    document.querySelectorAll('.course-card').forEach(card =>
        card.classList.remove('hidden')
    );
    document.getElementById('courseInfoCard').classList.remove('active');
}

/**********************************************************************
******                   Helpers                     ******
**********************************************************************/
function showCourseDetails(id) {
    const c = courseDetails[id];
    if (!c) return;

    document.getElementById('infoCardTitle')  .textContent = c.title;
    document.getElementById('infoCardCredits').textContent = c.credits;
    document.getElementById('infoCardGrade')  .textContent = c.grade;
    document.getElementById('infoCardSummary').textContent = c.summary;
    document.getElementById('courseInfoCard').classList.add('active');
}
function closeCourseInfoCard() {
    document.getElementById('courseInfoCard').classList.remove('active');
}

/**********************************************************************
******                   wireing                    ******
**********************************************************************/
function attachStaticListeners() {
    document.querySelectorAll('.degree-card').forEach(card => {
        card.addEventListener('click', () => {
            const major = card.dataset.major;
            activeFilter === major ? clearFilter() : filterCourses(major);
        });
    });


    document.getElementById('courseInfoCard').addEventListener('click', e => {
        if (e.target.id === 'courseInfoCard') closeCourseInfoCard();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeCourseInfoCard();
    });
}

function attachCourseCardListeners() {
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => showCourseDetails(card.dataset.course));
    });
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
            } else {
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

    /*********** Observe Bottom Bar ***********/
    const bottomBar = document.querySelector('.bottom-bar');
    if (bottomBar) {
        observer.observe(bottomBar);
    }
}




/**********************************************************************
******                     Initialization                        ******
**********************************************************************/
let activeFilter = null;
let courseDetails = null;

document.addEventListener('DOMContentLoaded', async () => {
    await loadCourses();             // 1) Grab Data
    buildCourseGrid();               // 2) create cards
    attachStaticListeners();         // 3) static elements
    attachCourseCardListeners();     // 4) new cards now exist
    setupScrollAnimations();

});


