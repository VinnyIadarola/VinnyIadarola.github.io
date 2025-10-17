/**********************************************************************
******                      Job Data                             ******
**********************************************************************/
const jobs = [
    {
        title: "Engineering In-Class Peer Mentor (Undergraduate TA)",
        company: "UW-Madison Engineering Department",
        department: "Education",
        location: "Madison, WI",
        positionType: "Part-time Position",
        startDate: "2024-01-01",
        endDate: "",
        status: "current",
        bulletPoints: [
            "Guided students through in-class matlab assignments",
            "Led discussions on circuit analysis.",
            "Hosted make-up exams and organized study groups"
        ],
        summary: `
            This role represented a continued extension of my teaching and leadership 
            experience. I maintained precise attendance and progress records. I 
            collaborated with Dr. Steven Fredette, Dr. Daniel van der Weide, and 
            Dr. Bulent Sarlioglu. I primarily taught ECE 230 after being invited to 
            return to the same position. ECE 230 is an introductory circuit analysis 
            course with an average enrollment of 120 students per semester. I facilitated 
            three discussion sections each week and in the earlier semesters, I would open 
            the course on behalf of the professor, ensuring all students understood the 
            current assignment. I also organized pre-exam study sessions, creating surveys 
            to identify areas where students required additional support.
        `,
        achievements: [
            "Received recognition from faculty for mentoring excellence",
            "Increased students averaged grades compared to other sections",
            "Successfully hosted multiple study sessions with high attendance"
        ],
        tags: ["leadership", "education","engineering","peer mentor","student support","record keeping","labs"]
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
        ],
        summary: `
            I supported pediatric inpatients by preparing welcoming environments tailored 
            to both the patient and their family. I enriched patients' experiences by 
            offering a walking partner, playmate or mathematical instruction from algebra 
            through calculus, during hospitalization. I ensured access to resources that
            enhanced comfort, while also maintaining clean and sanitized equipment and play
            materials in specialized facilities. Additionally, I strengthened the 
            volunteer team by training two new members and mentoring five others through 
            shadowing opportunities to help them understand the role and available resources..
        `,
        achievements: [
            "Recognized by staff for exceptional family engagement and patient care",
            "Contributed to improved patient morale through personalized interactions",
        ],
        tags: ["healthcare","patient care","nursing","medical","hospital","pediatric","children","family support","comfort care","behavioral assessment","tutoring","math"]
    },
    // {
    //     title: "Private Mathematics Tutor",
    //     company: "Self-Employed",
    //     department: "Education",
    //     location: "Madison, WI",
    //     positionType: "Volunteer",
    //     startDate: "2025-05-01",
    //     endDate: "2022-02-01",
    //     status: "completed",
    //     bulletPoints: [
    //         "Coordinated tutoring appointments with students.",
    //         "Taught students study skills, note-taking skills, and test-taking strategies.",
    //         "Worked with over 25 students spanning classes from Trigonometry to Calculus 2.",
    //     ],
    //     summary: `
    //         Idk
    //     `,
    //     achievements: [],
    //     tags: ["education","math","tutoring","bilingual","Spanish","English","youth","elementary school","volunteer"]
    // },
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
        summary: `
            Organizes and leads physical training for Marine Corps recruits, tracking
            attendance and progress while developing individualized improvement plans.
        `,
        achievements: [
            "Improved average platoon fitness scores by 15%",
            "Successfully prepared multiple candidates for Marine Corps selection",
            "Commended by Platoon Commander for leadership"
        ],
        tags: ["military","training","fitness","leadership","records management","recruit preparation"]
    },
    // {
    //     title: "Fraternity Academic Chair",
    //     company: "Kappa Eta Kappa",
    //     department: "Professional Fraternity",
    //     location: "Madison, WI",
    //     positionType: "Elected Fraternity",
    //     startDate: "2024-07-01",
    //     endDate: "2024-12-31",
    //     status: "completed",
    //     bulletPoints: [
    //         "Led team warm-ups and taught wrestling techniques",
    //         "Prepared the team for tournaments and competitive matches",
    //         "Ensured safety and maintained discipline during training and events"
    //     ],
    //     summary: `
    //         Directed and instructed youth wrestlers, overseeing training sessions,
    //         safety protocols, and tournament preparation for over 150 volunteer hours.
    //     `,
    //     achievements: [
    //         "Trained multiple wrestlers who advanced to regional competitions",
    //         "Improved team performance metrics over two seasons",
    //         "Recognized for dedication to youth sports development"
    //     ],
    //     tags: ["sports","youth","coaching","team leadership","athletics","wrestling","training","volunteer"]
    // },
    // {
    //     title: "Fraternity Parlimentarian",
    //     company: "Kappa Eta Kappa",
    //     department: "Professional Fraternity",
    //     location: "Madison, WI",
    //     positionType: "Elected Fraternity",
    //     startDate: "2024-07-01",
    //     endDate: "2024-12-31",
    //     status: "completed",
    //     bulletPoints: [
    //         "Led team warm-ups and taught wrestling techniques",
    //         "Prepared the team for tournaments and competitive matches",
    //         "Ensured safety and maintained discipline during training and events"
    //     ],
    //     summary: `
    //         Directed and instructed youth wrestlers, overseeing training sessions,
    //         safety protocols, and tournament preparation for over 150 volunteer hours.
    //     `,
    //     achievements: [
    //         "Trained multiple wrestlers who advanced to regional competitions",
    //         "Improved team performance metrics over two seasons",
    //         "Recognized for dedication to youth sports development"
    //     ],
    //     tags: ["sports","youth","coaching","team leadership","athletics","wrestling","training","volunteer"]
    // },
    {
        title: "Industry Outreach Chair",
        company: "IEEE Club",
        department: "Professional Fraternity",
        location: "Madison, WI",
        positionType: "Elected Club",
        startDate: "2024-06-01",
        endDate: "2024-10-31",
        status: "completed",
        bulletPoints: [
            "Redesigned the sponsorship form and email templates garnering more than $3000 in funds",
            "Contacted and scheduled industry speaker events with 5 different companies.",
            "Increased student participation by promoting industry events and creating resume folders for companies"
        ],
        summary: `
            I was selected by the organization's president to lead industry engagement. 
            I revamped sponsorship forms and outreach templates, and contacted over 
            20 companies to align them with appropriate partnership packages. I organized 
            speaker nights with five companies, including Milwaukee Tool and Forward Edge 
            ASIC, and created a centralized resume folder showcasing members' qualifications
            for partnering employers.
        `,
        achievements: [
            "Garnering more than $3000 in funds",
            "Hosted 5 different industry speaker events",
        ],
        tags: []
    },
    {
        title: "Engineering Expo Lead",
        company: "Kappa Eta Kappa Engineering Fraternity",
        department: "Professional Fraternity",
        location: "Madison, WI",
        positionType: "Elected Club",
        startDate: "2023-09-01",
        endDate: "2024-05-01",
        status: "completed",
        bulletPoints: [
            "Developed and presented a project, earning selection to lead a 15-person engineering team",
            "Led design sessions to ensure all members understood roles and expectations",
            "Reviewed and executed on project requirements and restrictions designated by the executive board"
        ],
        summary: `
            The Engineering Expo is an annual project showcase for organizations and 
            clubs. I planned and presented a physical Flappy Bird game to my 
            organization, after which I was elected project lead and awarded a $1,000 
            stipend along with a team of 15 engineers. I organized the team into hardware,
            firmware, and software groups, and held weekly sessions with team leads to 
            monitor progress and ensure proper API integration. I personally led the 
            hardware team, conducting bi-weekly design sessions to guide engineers 
            through their assigned tasks. The project culminated in a successful 
            presentation at the Expo. 
        `,
        achievements: [
            "Won election to lead and design engineering expo project",
            "Received positive feedback from expo attendees and judges"
        ],
        tags: ["engineering","leadership","project management","team coordination","process improvement","cost reduction"]
    },
    {
        title: "Dining Hall Team Member",
        company: "University of Wisconsin-Madison",
        department: "Dining",
        location: "Madison, WI",
        positionType: "Part-time Position",
        startDate: "2021-09-01",
        endDate: "2022-05-01",
        status: "completed",
        bulletPoints: [
            "Earned certifications as a cashier and in basic grilling operations",
            "Independently managed the grill station and oversaw food preparation",
            "Entrusted with additional responsibility to operate the university convenience store independently"
        ],
        summary: `
            A member of my school's dining hall system, I began working as a cashier and 
            later gained increased responsibilities by becoming certified to operate the 
            grill. I independently managed the “Fired Up” station until receiving a 
            special assignment to oversee the “Flamingo Run,” the university's convenience 
            store. In this role, I was responsible for handling all transactions as well 
            as stocking and maintaining the cleanliness of the store.
        `,
        achievements: [],
        tags: ["engineering","leadership","project management","team coordination","process improvement","cost reduction"]
    },
    {
        title: "Chinese Honors Association Tutor",
        company: "Chinese Honors Association",
        department: "Education",
        location: "Santa Ana, CA",
        positionType: "Nominated",
        startDate: "2019-01-01",
        endDate: "2020-12-31",
        status: "completed",
        bulletPoints: [
            "Tutored students in Chinese language, history, and culture",
            "Taught traditional art forms such as calligraphy",
            "Supported students in preparing for academic competitions"
        ],
        summary: `
            Provided tutoring in Chinese language, history, and calligraphy, assisting
            underclassmen in enhancing their academic performance and deepening their 
            cultural understanding. Completed ten hours of tutoring per semester to 
            maintain active membership and demonstrated a consistent commitment to
            mentorship, academic excellence, and the promotion of cultural appreciation. 
        `,
        achievements: [],
        tags: ["education","Chinese language","history","calligraphy","tutoring","culture","volunteer"]
    },
    {
        title: "Youth Wrestling Coach",
        company: "Youth Wrestling Club",
        department: "Sports & Recreation",
        location: "Santa Ana, CA",
        positionType: "Part-time",
        startDate: "2018-04-01",
        endDate: "2020-07-01",
        status: "completed",
        bulletPoints: [
            "Led team warm-ups and taught wrestling techniques",
            "Prepared the team for tournaments and competitive matches",
            "Ensured safety and maintained discipline during training and events"
        ],
        summary: `
            Primary responsibilities included instructing youth wrestlers (U13),
            overseeing training sessions, and preparing athletes for tournaments for
            over 150 hours. I began each practice by leading warm-ups and stretches,
            ensuring all wrestlers were attentive to instruction. I walked around and
            provided demonstrations of the moves to the wrestlers. I became a
            registered coach for multiple tournament hosts so I could remain alongside
            my wrestlers at every moment. Prior to weigh-ins, I conducted gear and
            general health checks. During tournaments, I supervised and observed a
            select group of wrestlers, ensuring they were properly nourished and aware
            of any upcoming matches.
        `,
        achievements: [
            "Trained multiple wrestlers who advanced to state-level competitions",
            "Personally requested by headcoach to to lead tournament organization"
        ],
        tags: ["sports","youth","coaching","team leadership","athletics","wrestling","training","paid"]
    },  
    {
        title: "Elementary School Tutor",
        company: "Cielo Vista Elementary School",
        department: "Education",
        location: "Rancho Santa Margarita, CA",
        positionType: "Volunteer",
        startDate: "2017-01-01",
        endDate: "2018-01-01",
        status: "completed",
        bulletPoints: [
            "Taught basic mathematics to children in both Spanish and English",
            "Assisted students with English homework assignments",
            "Encouraged academic confidence through patient, individualized instruction"
        ],
        summary: `
            I was one of 15 students selected to provide bilingual tutoring 
            in Math and English to first and second-grade students. I 
            employed several strategies to facilitate learning through 
            various objects, activities, and games. I accumulated 50 volunteer 
            hours teaching students in the after-school program.
        `,
        tags: ["education","math","tutoring","bilingual","Spanish","English","youth","elementary school","volunteer"]
    },
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