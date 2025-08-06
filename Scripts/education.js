/**********************************************************************
******                       Book Animation                       ******
**********************************************************************/
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.falling-books');
    const numBooks  = 10;  // how many books you want at once

    for (let i = 0; i < numBooks; i++) {
        const b = document.createElement('div');
        b.className = 'book';
        b.innerHTML = '<i class="fas fa-book"></i>'; // use Font Awesome book icon

        // randomize size between 2rem and 4rem
        const size = Math.random() * 2 + 2;
        b.style.fontSize = size + 'rem';

        // random horizontal start (0%–100%)
        b.style.left = Math.random() * 100 + '%';

        // random duration between 6s and 12s
        b.style.animationDuration = (Math.random() * 6 + 6) + 's';

        // randomize a negative delay so they’re staggered immediately
        b.style.animationDelay = -Math.random() * 12 + 's';

        container.appendChild(b);
     }
});



/**********************************************************************
******                           Data                            ******
**********************************************************************/
    let activeFilter = null;
    
    const courseDetails = {

        // Fall 2021-2022 (Regular Session)
        'lsc100':     { title: 'Science and Storytelling',           code: 'LSC 100',     credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'asian236':   { title: 'Asia Enchanted',                     code: 'ASIAN 236',   credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'compsci200': { title: 'Programming I',                      code: 'COMP SCI 200',credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'ils157':     { title: 'Bradley Roundtable Seminar',         code: 'ILS 157',     credits: 1, grade: 'CR',majors: [], summary: 'TBD' },
        'math221':    { title: 'Calculus & Analytic Geometry 1',     code: 'MATH 221',    credits: 5, grade: 'A', majors: [], summary: 'TBD' },

        // Spring 2021-2022
        'asian310':   { title: 'Intro to Comics and Graphic Novs',    code: 'ASIAN 310',   credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'chem103':    { title: 'General Chemistry I',                code: 'CHEM 103',    credits: 4, grade: 'A', majors: [], summary: 'TBD' },
        'math222':    { title: 'Calculus & Analytic Geometry 2',     code: 'MATH 222',    credits: 4, grade: 'A', majors: [], summary: 'TBD' },
        'physics201': { title: 'General Physics',                   code: 'PHYSICS 201', credits: 5, grade: 'A', majors: [], summary: 'TBD' },

        // Summer 2022
        'chem104':    { title: 'General Chemistry II',               code: 'CHEM 104',    credits: 5, grade: 'A', majors: [], summary: 'TBD' },
        'music203':   { title: 'American Ethnicities & Pop Song',    code: 'MUSIC 203',   credits: 3, grade: 'A', majors: [], summary: 'TBD' },

        // Fall 2022-2023
        'chem343':    { title: 'Organic Chemistry I',                code: 'CHEM 343',    credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'math234':    { title: 'Calc—Functions of Variables',        code: 'MATH 234',    credits: 4, grade: 'A', majors: [], summary: 'TBD' },
        'math320':    { title: 'Linear Algebra & Differential Equations', code: 'MATH 320', credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'zoology570': { title: 'Cell Biology',                      code: 'ZOOLOGY 570', credits: 3, grade: 'B', majors: [], summary: 'TBD' },

        // Spring 2022-2023
        'compsci252': { title: 'Intro to Computer Engineering',      code: 'COMP SCI 252',credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'compsci300': { title: 'Programming II',                     code: 'COMP SCI 300',credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'compsci475': { title: 'Intro-Combinatorics',                code: 'COMP SCI 475',credits: 3, grade: 'C', majors: [], summary: 'TBD' },
        'ece203':     { title: 'Signals, Information & Computation', code: 'ECE 203',     credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'dance110':   { title: 'Workshop in Dance Activity',         code: 'DANCE 110',   credits: 1, grade: 'A', majors: [], summary: 'TBD' },
        'physics202': { title: 'General Physics',                   code: 'PHYSICS 202', credits: 5, grade: 'AB',majors: [], summary: 'TBD' },

        // Summer 2023
        'ece230':     { title: 'Circuit Analysis',                  code: 'ECE 230',     credits: 4, grade: 'A', majors: [], summary: 'TBD' },
        'ece354':     { title: 'Machine Organization & Programming',code: 'ECE 354',     credits: 3, grade: 'AB',majors: [], summary: 'TBD' },

        // Fall 2023-2024
        'compsci400': { title: 'Programming III',                   code: 'COMP SCI 400',credits: 3, grade: 'B', majors: [], summary: 'TBD' },
        'ece210':     { title: 'Intro Electrical Engineering',       code: 'ECE 210',     credits: 2, grade: 'A', majors: [], summary: 'TBD' },
        'ece219':     { title: 'Analytical Methods for EM Engineering', code: 'ECE 219',  credits: 2, grade: 'A', majors: [], summary: 'TBD' },
        'ece340':     { title: 'Electronic Circuits I',             code: 'ECE 340',     credits: 3, grade: 'AB',majors: [], summary: 'TBD' },
        'ece352':     { title: 'Digital System Fundamentals',       code: 'ECE 352',     credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'ece353':     { title: 'Intro to Microprocessor Systems',   code: 'ECE 353',     credits: 3, grade: 'AB',majors: [], summary: 'TBD' },
        'dance110b':  { title: 'Workshop in Dance Activity',         code: 'DANCE 110',   credits: 1, grade: 'A', majors: [], summary: 'TBD' },

        // Spring 2023-2024
        'biochem501': { title: 'Introduction-Biochemistry',         code: 'BIOCHEM 501', credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'ece204':     { title: 'Data Science & Engineering',        code: 'ECE 204',     credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'ece220':     { title: 'Electrodynamics I',                 code: 'ECE 220',     credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'ece270':     { title: 'Circuits Laboratory I',             code: 'ECE 270',     credits: 1, grade: 'A', majors: [], summary: 'TBD' },
        'ece315':     { title: 'Intro Microprocessor Lab',          code: 'ECE 315',     credits: 1, grade: 'A', majors: [], summary: 'TBD' },
        'ece551':     { title: 'Digital Sys Design & Synthesis',    code: 'ECE 551',     credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'dance101':   { title: 'Social Dance I',                    code: 'DANCE 101',   credits: 1, grade: 'A', majors: [], summary: 'TBD' },

        // Summer 2024
        'bme517':     { title: 'Biology in Engineering Seminar',    code: 'BME 517',     credits: 1, grade: 'CR',majors: [], summary: 'TBD' },
        'math525':    { title: 'Linear Optimization',               code: 'MATH 525',    credits: 3, grade: 'AB',majors: [], summary: 'TBD' },
        'compsci577': { title: 'Introduction to Algorithms',        code: 'COMP SCI 577',credits: 4, grade: 'AB',majors: [], summary: 'TBD' },

        // Fall 2024-2025
        'compsci532': { title: 'Matrix Methods in Machine Learning',code: 'COMP SCI 532',credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'ece331':     { title: 'Intro-Random Signal Analysis & Stats',code: 'ECE 331',  credits: 3, grade: 'AB',majors: [], summary: 'TBD' },
        'ece552':     { title: 'Intro-Computer Architecture',       code: 'ECE 552',     credits: 3, grade: 'AB',majors: [], summary: 'TBD' },
        'math415':    { title: 'Applied Dynamic Systems, Chaos & Modeling', code: 'MATH 415', credits: 3, grade: 'A',majors: [], summary: 'TBD' },
        'math421':    { title: 'Theory of Single Variable Calculus',code: 'MATH 421',    credits: 3, grade: 'A', majors: [], summary: 'TBD' },

        // Spring 2024-2025
        'biology152': { title: 'Introductory Biology',              code: 'BIOLOGY 152', credits: 5, grade: 'A', majors: [], summary: 'TBD' },
        'bme520':     { title: 'Stem Cell Bioengineering',           code: 'BME 520',     credits: 3, grade: 'AB',majors: [], summary: 'TBD' },
        'math521':    { title: 'Analysis I',                         code: 'MATH 521',    credits: 3, grade: 'A', majors: [], summary: 'TBD' },
        'music113':   { title: 'Music in Performance',               code: 'MUSIC 113',   credits: 1, grade: 'A', majors: [], summary: 'TBD' },

        // Fall 2025-2026 (No grades yet)
        'compsci539': { title: 'Intro-Artificial Neural Networks',   code: 'COMP SCI 539',credits: 3, grade: '',  majors: [], summary: 'TBD' },
        'compsci544': { title: 'Intro Big Data Systems',             code: 'COMP SCI 544',credits: 3, grade: '',  majors: [], summary: 'TBD' },
        'compsci564': { title: 'Database Management Systems',        code: 'COMP SCI 564',credits: 4, grade: '',  majors: [], summary: 'TBD' },
        'ece455':     { title: 'Capstone Design in ECE',             code: 'ECE 455',     credits: 4, grade: '',  majors: [], summary: 'TBD' },
        'ece541':     { title: 'Analog MOS Integrated Circuit Design',code: 'ECE 541',    credits: 3, grade: '',  majors: [], summary: 'TBD' },
        'psych202':   { title: 'Introduction to Psychology',         code: 'PSYCH 202',   credits: 3, grade: '',  majors: [], summary: 'TBD' }

    };


    
/**********************************************************************
******                   Building Course Grid                    ******
**********************************************************************/
function buildCourseGrid() {
    const grid = document.getElementById('coursesGrid');

    Object.entries(courseDetails).forEach(([id, course]) => {
        const card = document.createElement('div');
        card.className      = 'course-card';
        card.dataset.course = id;                      // for info card
        card.dataset.majors = course.majors.join(' '); // space-separated list

        card.innerHTML = `
            <div class="course-name">${course.title}</div>
            <div class="course-code">${course.code}</div>
            <span class="grade ${course.grade[0]}">${course.grade}</span>
        `;

        grid.appendChild(card);
    });
}

/* ----------------- 3.  Filtering ----------------- */
function filterCourses(major) {
    activeFilter = major;

    // Highlight the chosen degree
    document.querySelectorAll('.degree-card').forEach(card => {
        card.classList.toggle('active', card.dataset.major === major);
    });

    // Show / hide courses
    document.querySelectorAll('.course-card').forEach(card => {
        const majors = card.dataset.majors.split(' ');
        card.classList.toggle('hidden', !majors.includes(major));
    });

    // Close any open infoCard
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

/* ----------------- 4.  infoCard helpers ----------------- */
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

/* ----------------- 5.  One-time listener wiring ----------------- */
function attachStaticListeners() {
    // Degree cards
    document.querySelectorAll('.degree-card').forEach(card => {
        card.addEventListener('click', () => {
            const major = card.dataset.major;
            activeFilter === major ? clearFilter() : filterCourses(major);
        });
    });

    // “Show All Courses” button already has inline onclick="clearFilter()"

    // infoCard background click
    document.getElementById('courseInfoCard').addEventListener('click', e => {
        if (e.target.id === 'courseInfoCard') closeCourseInfoCard();
    });

    // ESC key closes infoCard
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




/* ----------------- 6.  Init ----------------- */
document.addEventListener('DOMContentLoaded', () => {
    buildCourseGrid();           // 1) create cards
    attachStaticListeners();     // 2) static elements
    attachCourseCardListeners(); // 3) new cards now exist
    setupScrollAnimations();

});


