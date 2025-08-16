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
******                           Data                            ******
**********************************************************************/
let activeFilter = null;
const courseDetails = {
    // Fall 2025-2026 (No grades yet)
    compsci539: {
        title: 'Intro-Artificial Neural Networks',
        code: 'COMP SCI/ECE 539',
        credits: 3,
        grade: '',
        majors: ['computer-science', 'mathematics', 'computer-engineering'],
        summary:
            'Theory and applications of artificial neural networks: multi-layer perceptron, self-organization map, deep neural network, convolutional neural network, recurrent network, support vector machines, genetic algorithms, and evolutionary computing. Applications to control, pattern recognition, prediction, and object detection and tracking.',
    },
    compsci544: {
        title: 'Intro Big Data Systems',
        code: 'COMP SCI 544',
        credits: 3,
        grade: '',
        majors: ['computer-science'],
        summary:
            'Deploy and use distributed systems to store and analyze large data sets. Covers both unstructured and structured storage approaches. Analysis includes new query languages, streaming data, and machine-learning pipelines (primarily in Python).',
    },
    compsci564: {
        title: 'Database Management Systems',
        code: 'COMP SCI 564',
        credits: 4,
        grade: '',
        majors: ['computer-engineering'],
        summary:
            'Data-model fundamentals (relational, hierarchical, network). Hands-on work with relational DBMS; internal implementation topics such as file organization, query processing, concurrency control, recovery, and views.',
    },
    ece455: {
        title: 'Capstone Design in ECE',
        code: 'ECE 455',
        credits: 4,
        grade: '',
        majors: ['computer-engineering'],
        summary: 'Apply electrical and computer engineering knowledge and skills acquired to real-world electrical and computer engineering design projects. Specializing in GPU Algorithm and System Design',
    },
    ece541: {
        title: 'Analog MOS Integrated Circuit Design',
        code: 'ECE 541',
        credits: 3,
        grade: '',
        majors: ['computer-engineering'],
        summary:
            'Analysis, design, and application of modern analog circuits built with bipolar and field-effect technologies; emphasis on the basic building blocks used in today\'s mixed-signal ICs.',
    },
    psych202: {
        title: 'Introduction to Psychology',
        code: 'PSYCH 202',
        credits: 3,
        grade: '',
        majors: ['biology'],
        summary:
            'Survey of behavior and its development: motivation, emotion, learning, memory, personality, intelligence, language, thinking, and social behavior.',
    },

    // Spring 2024-2025
    biology152: {
        title: 'Introductory Biology 2',
        code: 'BIOLOGY 152',
        credits: 5,
        grade: 'A',
        majors: ['computer-engineering', 'biology'],
        summary:
            'Plant physiology, evolutionary theory, kingdom survey, ecology across levels of biological organization.',
    },
    bme520: {
        title: 'Stem Cell Bioengineering',
        code: 'BME 520',
        credits: 3,
        grade: 'AB',
        majors: ['biology'],
        summary:
            'Engineering methods to understand/manipulate stem cells: signaling models, micro-environment engineering, and roles in tissue development and regeneration.',
    },

    math521: {
        title: 'Analysis I',
        code: 'MATH 521',
        credits: 3,
        grade: 'A',
        majors: ['mathematics'],
        summary:
            'Real numbers; metric spaces; sequences, series, limits, continuity, differentiation, integration; uniform convergence.',
    },
    music113: {
        title: 'Music in Performance',
        code: 'MUSIC 113',
        credits: 1,
        grade: 'A',
        majors: ['computer-engineering'],
        summary: 'Lecture-performance format introducing chamber-music literature and styles.',
    },

    // Fall 2024-2025
    compsci532: {
        title: 'Matrix Methods in Machine Learning',
        code: 'COMP SCI 532',
        credits: 3,
        grade: 'A',
        majors: ['computer-science', 'mathematics', 'computer-engineering'],
        summary:
            'Linear-algebra foundations for ML: SVD, regularization, regression, clustering, kernel methods, neural networks; Matlab/Python/Julia/R expected.',
    },
    ece331: {
        title: 'Intro-Random Signal Analysis & Stats',
        code: 'ECE 331',
        credits: 3,
        grade: 'AB',
        majors: ['computer-engineering'],
        summary:
            'Probability, random variables/processes, confidence intervals, statistical inference, correlation/spectrum of WSS processes; noise in linear systems.',
    },
    ece552: {
        title: 'Intro-Computer Architecture',
        code: 'ECE 552',
        credits: 3,
        grade: 'AB',
        majors: ['computer-engineering', 'computer-science'],
        summary:
            'Processor datapaths/control, ISAs, caches & memory hierarchies, interrupts/I-O; microprogramming; Verilog background helpful.',
    },
    math415: {
        title: 'Applied Dynamic Systems, Chaos & Modeling',
        code: 'MATH 415',
        credits: 3,
        grade: 'A',
        majors: ['mathematics'],
        summary:
            'Nonlinear dynamical-system behavior, stability, bifurcations, chaos, with applications across science and engineering.',
    },
    math421: {
        title: 'Theory of Single Variable Calculus',
        code: 'MATH 421',
        credits: 3,
        grade: 'A',
        majors: ['mathematics'],
        summary:
            'Proof-driven treatment of differential/integral calculus for math majors; rigorous foundations for earlier calculus topics.',
    },

    // Summer 2024
    bme517: {
        title: 'Biology in Engineering Seminar',
        code: 'BME 517',
        credits: 1,
        grade: 'CR',
        majors: ['biology'],
        summary:
            'Weekly seminars on engineering breakthroughs at the biology-engineering interface.',
    },
    math525: {
        title: 'Linear Optimization',
        code: 'MATH 525',
        credits: 3,
        grade: 'AB',
        majors: ['computer-science', 'mathematics'],
        summary:
            'Theory/geometry of linear programs, simplex algorithm, duality, infeasibility theorems.',
    },
    compsci577: {
        title: 'Introduction to Algorithms',
        code: 'COMP SCI 577',
        credits: 4,
        grade: 'AB',
        majors: ['computer-science', 'mathematics', 'computer-engineering'],
        summary:
            'Design/analysis paradigms (greedy, divide-and-conquer, DP), NP-completeness, approximation, randomized algorithms.',
    },

    // Spring 2023-2024
    biochem501: {
        title: 'Introduction-Biochemistry',
        code: 'BIOCHEM 501',
        credits: 3,
        grade: 'A',
        majors: ['biology'],
        summary:
            'Macromolecular structure, metabolism, nutrition, and regulation in biological systems.',
    },
    ece204: {
        title: 'Data Science & Engineering',
        code: 'ECE 204',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Python-based data acquisition, cleaning, visualization, basic modeling; ethics and bias in data.',
    },
    ece220: {
        title: 'Electrodynamics I',
        code: 'ECE 220',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Maxwell\'s equations, boundary conditions, wave equation, transmission lines; dielectric/magnetic materials.',
    },
    ece270: {
        title: 'Circuits Laboratory I',
        code: 'ECE 270',
        credits: 1,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Bench experiments on KCL/KVL, op-amps, inductors, and frequency response.',
    },
    ece315: {
        title: 'Intro Microprocessor Lab',
        code: 'ECE 315',
        credits: 1,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Assembly programming, digital I/O, interrupts on a microcontroller platform.',
    },
    ece551: {
        title: 'Digital Sys Design & Synthesis',
        code: 'ECE 551',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'HDL-based design, automated synthesis, timing-driven methods, IP reuse; Verilog/VHDL.',
    },
    dance101: {
        title: 'Social Dance I',
        code: 'DANCE 101',
        credits: 1,
        grade: 'A',
        majors: [],
        summary:
            'Waltz, Foxtrot, Swing, Cha-Cha basics; partner rotation for practice.',
    },

    // Fall 2023-2024
    compsci400: {
        title: 'Programming III',
        code: 'COMP SCI 400',
        credits: 3,
        grade: 'B',
        majors: ['computer-engineering', 'computer-science', 'mathematics'],
        summary:
            'Balanced trees, graphs, hash tables; medium-sized project with modern tooling and UI.',
    },
    ece210: {
        title: 'Intro Electrical Engineering',
        code: 'ECE 210',
        credits: 2,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Overview of EE fields; basic circuits, signals, and systems.',
    },
    ece219: {
        title: 'Analytical Methods for EM Engineering',
        code: 'ECE 219',
        credits: 2,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Vector-calculus tools for electromagnetic analysis: potentials, flux, charge distributions.',
    },
    ece340: {
        title: 'Electronic Circuits I',
        code: 'ECE 340',
        credits: 3,
        grade: 'AB',
        majors: ['computer-engineering'],
        summary:
            'Device models (diodes, BJTs, MOSFETs), biasing, small-signal analysis, amplifiers, frequency response.',
    },
    ece352: {
        title: 'Digital System Fundamentals',
        code: 'ECE 352',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering', 'mathematics'],
        summary:
            'Boolean algebra, combinational/sequential logic, finite-state machines, introduction to computer organization.',
    },
    ece353: {
        title: 'Intro to Microprocessor Systems',
        code: 'ECE 353',
        credits: 3,
        grade: 'AB',
        majors: ['computer-engineering'],
        summary:
            'Microprocessor architecture, assembly, I/O interfacing, interrupts, DMA, and microcontrollers.',
    },
    dance110: {
        title: 'Workshop in Dance Activity',
        code: 'DANCE 110',
        credits: 1,
        grade: 'A',
        majors: [],
        summary:
            'Technique, flexibility, alignment, and improvisation in dance.',
    },

    // Summer 2023
    ece230: {
        title: 'Circuit Analysis',
        code: 'ECE 230',
        credits: 4,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Nodal/mesh analysis, superposition, Thevenin/Norton, first- and second-order circuits, AC steady state, filters.',
    },
    ece354: {
        title: 'Machine Organization & Programming',
        code: 'ECE 354',
        credits: 3,
        grade: 'AB',
        majors: ['computer-engineering', 'computer-science'],
        summary:
            'C language, memory hierarchy, virtual memory, assembly, linking, interrupts/signals.',
    },

    // Spring 2022-2023
    compsci252: {
        title: 'Intro to Computer Engineering',
        code: 'COMP SCI 252',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering', 'computer-science'],
        summary:
            'Transistor-level logic, Boolean algebra, FSMs, basic CPU datapath/control, assembly programming.',
    },
    compsci300: {
        title: 'Programming II',
        code: 'COMP SCI 300',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering', 'computer-science', 'mathematics'],
        summary:
            'OOP in Java, lists/stacks/queues, generics, recursion, testing, file I/O; multi-class projects.',
    },
    compsci475: {
        title: 'Intro-Combinatorics',
        code: 'COMP SCI 475',
        credits: 3,
        grade: 'C',
        majors: ['computer-engineering', 'computer-science', 'mathematics'],
        summary:
            'Counting, inclusion-exclusion, generating functions, recurrences, graph colorings, designs, matchings.',
    },
    ece203: {
        title: 'Signals, Information & Computation',
        code: 'ECE 203',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Signal representation, transforms, information measures, basic computation models in EE.',
    },
    dance110b: {
        title: 'Workshop in Dance Activity',
        code: 'DANCE 110',
        credits: 1,
        grade: 'A',
        majors: [],
        summary:
            'Flexibility, strength, improvisation, rhythm through social-dance forms.',
    },
    physics202: {
        title: 'General Physics',
        code: 'PHYSICS 202',
        credits: 5,
        grade: 'AB',
        majors: ['computer-engineering'],
        summary:
            'Electricity, magnetism, optics, and waves; calculus-based for engineers.',
    },

    // Fall 2022-2023
    chem343: {
        title: 'Organic Chemistry I',
        code: 'CHEM 343',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Structure/reactivity of alkanes, alkenes, alkynes, alkyl halides, alcohols, thiols; stereochemistry and mechanisms.',
    },
    math234: {
        title: 'Calc-Functions of Variables',
        code: 'MATH 234',
        credits: 4,
        grade: 'A',
        majors: ['computer-engineering', 'computer-science', 'mathematics'],
        summary:
            'Multivariable calculus, vector calculus, multiple integrals, partial derivatives.',
    },
    math320: {
        title: 'Linear Alg & Diff Equations',
        code: 'MATH 320',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering', 'computer-science', 'mathematics'],
        summary:
            'Matrix algebra, vector spaces, eigenvalues; first-order ODEs, linear systems, numerical methods.',
    },
    zoology570: {
        title: 'Cell Biology',
        code: 'ZOOLOGY 570',
        credits: 3,
        grade: 'B',
        majors: ['computer-engineering', 'biology'],
        summary:
            'Modern cell-biology concepts: membranes, organelles, signaling, cytoskeleton, gene regulation.',
    },

    // Summer 2022
    chem104: {
        title: 'General Chemistry II',
        code: 'CHEM 104',
        credits: 5,
        grade: 'A',
        majors: [],
        summary:
            'Equilibrium, kinetics, electrochemistry, nuclear chemistry, intro organic, lab techniques.',
    },
    music203: {
        title: 'American Ethnicities & Pop Song',
        code: 'MUSIC 203',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Popular song\'s role in shaping ethnic/racial identity and as anti-racist protest.',
    },

    // Spring 2021-2022
    asian310: {
        title: 'Intro to Comics and Graphic Novs',
        code: 'ASIAN 310',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Global survey of comics/graphic novels; narrative theory, visual rhetoric, cultural contexts.',
    },
    chem103: {
        title: 'General Chemistry I',
        code: 'CHEM 103',
        credits: 4,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Stoichiometry, gas laws, thermochemistry, atomic structure, bonding, descriptive chemistry, lab skills.',
    },
    math222: {
        title: 'Calculus&Analytic Geometry 2',
        code: 'MATH 222',
        credits: 4,
        grade: 'A',
        majors: ['computer-engineering', 'computer-science', 'mathematics'],
        summary:
            'Techniques of integration, infinite series, ODEs, parametric/vector functions.',
    },
    physics201: {
        title: 'General Physics',
        code: 'PHYSICS 201',
        credits: 5,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Mechanics: kinematics, Newtonian dynamics, energy, momentum; calculus-based for engineers.',
    },

    // Fall 2021-2022
    lsc100: {
        title: 'Science and Storytelling',
        code: 'LSC 100',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Research, writing, and speaking for scientific/technical audiences; storytelling techniques.',
    },
    asian236: {
        title: 'Asia Enchanted',
        code: 'ASIAN 236',
        credits: 3,
        grade: 'A',
        majors: ['computer-engineering'],
        summary:
            'Monsters, ghosts, deities across Asian cultures; literary, religious, anthropological approaches.',
    },
    compsci200: {
        title: 'Programming I',
        code: 'COMP SCI 200',
        credits: 3,
        grade: 'A',
        majors: ['computer-science', 'computer-engineering'],
        summary:
            'Intro programming, control structures, arrays, methods, documentation, style; no prior experience assumed.',
    },
    ils157: {
        title: 'Bradley Roundtable Seminar',
        code: 'ILS 157',
        credits: 1,
        grade: 'CR',
        majors: [],
        summary:
            'Interdisciplinary seminar topics for Bradley Learning Community residents.',
    },
    math221: {
        title: 'Calculus&Analytic Geometry 1',
        code: 'MATH 221',
        credits: 5,
        grade: 'A',
        majors: ['computer-engineering', 'computer-science', 'mathematics'],
        summary:
            'Limits, derivatives, integrals, applications; analytic geometry in the plane.',
    },


    //T
    biology151: {
        title: 'Introductory Biology 1',
        code: 'BIOLOGY 151',
        credits: 5,
        grade: 'T',
        majors: ['biology'],
        summary:
            'Topics include: cell structure and function, cellular metabolism (enzymes, respiration, photosynthesis), information flow (DNA, RNA, protein), principles of genetics and selected topics in Animal Physiology.',
    },

};


    
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
******                      Filter                     ******
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




/* ----------------- 6.  Init ----------------- */
document.addEventListener('DOMContentLoaded', () => {
    buildCourseGrid();           // 1) create cards
    attachStaticListeners();     // 2) static elements
    attachCourseCardListeners(); // 3) new cards now exist
    setupScrollAnimations();

});


