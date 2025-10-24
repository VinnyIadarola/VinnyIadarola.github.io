/**********************************************************************
******                       Load Languages                      ******
**********************************************************************/
async function loadLanguages() {
  try {
        const res = await fetch('./Scripts/Data/languages.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        languagesData = await res.json();
    } catch (err) {
        console.error('Failed to load languages.json:', err);
        const grid = document.getElementById('cardGrid');
        if (grid) {
            grid.innerHTML = '';
            const fallback = document.createElement('p');
            fallback.style.color = 'rgba(214,214,214,0.9)';
            fallback.textContent = 'Unable to load languages at the moment.';
            grid.appendChild(fallback);
        }
    }
}

/**********************************************************************
******                      Helper Functions                      ******
**********************************************************************/
function qs(root, sel) {
    return (root || document).querySelector(sel);
}
function qsa(root, sel) {
    return Array.from((root || document).querySelectorAll(sel));
}


/**********************************************************************
******                        Card Creation                        ******
**********************************************************************/
function createLanguageCard(lang) {
    const tpl = qs(document, '#cardTemplate');
    const node = tpl.content.cloneNode(true);

    const card        = qs(node, '.card');
    const icon        = qs(node, '.language-icon');
    const img         = qs(node, '.language-icon img');
    const titleEl     = qs(node, '.lang-title');
    const yearsNumEl  = qs(node, '.years-num');
    const descEl      = qs(node, '.lang-description');
    const langBtn     = qs(node, '.lang-btn');
    const infoLogo    = qs(node, '.info-logo');
    const infoLogoImg = qs(node, '.info-logo img');

    card.dataset.langId = (lang.id || (lang.name || '')).toString().toLowerCase().replace(/\s+/g, '-');
    if (lang.class) icon.classList.add(lang.class);
    icon.setAttribute('data-lang', lang.name || '');

    // Set both the icon image and the info logo image
    img.src = lang.image;
    img.alt = lang.alt || `${lang.name} Logo`;
    
    if (infoLogoImg) {
        infoLogoImg.src = lang.image;
        infoLogoImg.alt = lang.alt || `${lang.name} Logo`;
    }

    titleEl.textContent = lang.name || 'Untitled';
    const yrs = Number(lang.years ?? lang.experienceYears ?? 0);
    yearsNumEl.textContent = isNaN(yrs) ? '—' : `${yrs}`;
    descEl.textContent = lang.description || lang.blurb || 'Description coming soon.';

    // Button behavior
    langBtn.setAttribute('aria-disabled', 'true');   // start disabled
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // don't toggle card

        // If not expanded yet, expand instead of navigating
        if (!card.classList.contains('expanded')) {
            e.preventDefault();
            toggleExpand(card, lang);
            return;
        }

        // If expanded, ensure href is set with the tag param
        const tagParam = encodeURIComponent(lang.name || '');
        langBtn.setAttribute('href', `projects.html?tag=${tagParam}`);
    });

    // Toggle expand on card
    const onToggle = () => toggleExpand(card, lang);
    card.addEventListener('click', onToggle);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
        }
    });

    return card;
}


function toggleExpand(card, lang) {
    const grid = qs(document, '#cardGrid');
    const nowExpanded = card.classList.toggle('expanded');

    if (nowExpanded) {
        qsa(document, '.card.expanded').forEach(c => c !== card && c.classList.remove('expanded'));
        grid?.classList.add('grid-expanded');
    } else {
        grid?.classList.remove('grid-expanded');
    }

    card.setAttribute('aria-expanded', String(nowExpanded));

    // Get references to existing elements
    const panel = qs(card, '.text-content');
    const btn = qs(card, '.lang-btn');
    const titleEl = qs(card, '.lang-title');
    const infoLogo = qs(card, '.info-logo');
    
    const langName = (lang?.name || titleEl?.textContent || '').trim();

    // Handle button state
    if (btn) {
        if (nowExpanded) {
            btn.removeAttribute('aria-disabled');
            btn.setAttribute('href', `projects.html?tag=${encodeURIComponent(langName)}`);
            btn.textContent = langName ? `View ${langName} Projects` : 'View Projects';
        } else {
            btn.setAttribute('aria-disabled', 'true');
            btn.setAttribute('href', '#');
            btn.textContent = 'View Projects';
        }
    }

    if (!panel) return;

    if (nowExpanded) {
        // Mark as "info card" and show the logo
        panel.classList.add('info-card');
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-label', 'Info Card');
        
        if (infoLogo) {
            infoLogo.style.display = 'grid';
        }
        
        if (titleEl && !titleEl.dataset.centered) {
            titleEl.dataset.centered = '1';
        }
    } else {
        // Collapse cleanup
        panel.classList.remove('info-card');
        panel.removeAttribute('role');
        panel.removeAttribute('aria-label');
        
        if (infoLogo) {
            infoLogo.style.display = 'none';
        }
        
        if (titleEl && titleEl.dataset.centered) {
            delete titleEl.dataset.centered;
        }
    }
}


/**********************************************************************
******                         Rendering                         ******
**********************************************************************/
function renderLanguages(langs) {
    const grid = document.getElementById('cardGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const frag = document.createDocumentFragment();
    langs.forEach(lang => frag.appendChild(createLanguageCard(lang)));
    grid.appendChild(frag);
}

// collapse when clicking outside cards
function setupGlobalCollapse() {
    document.addEventListener('click', (e) => {
        const grid = document.getElementById('cardGrid');
        if (!e.target.closest('.card')) {
            qsa(document, '.card.expanded').forEach(c => c.classList.remove('expanded'));
            grid?.classList.remove('grid-expanded');
        }
    });
}


/**********************************************************************
******                       Typing Effect                       ******
**********************************************************************/
function setupTypingEffect() {
    const texts = [
        'A computer engineer.',
        'A computer scientist.',
        'A mathematician.',
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let commonPrefixLength = 0;
    const typingElement = document.getElementById('typingText');

    function getCommonPrefixLength(a, b) {
        let i = 0;
        while (i < a.length && i < b.length && a[i] === b[i]) i++;
        return i;
    }

    function typeText() {
        const currentText = texts[textIndex];
        const nextText = texts[(textIndex + 1) % texts.length];

        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                commonPrefixLength = getCommonPrefixLength(currentText, nextText);
                setTimeout(typeText, 2000);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === commonPrefixLength) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeText, 300);
                return;
            }
        }

        const typeSpeed = isDeleting ? 75 : 100;
        setTimeout(typeText, typeSpeed);
    }

    typeText();
}


/**********************************************************************
******                  Scroll Animations                        ******
**********************************************************************/
function setupScrollAnimations() {
    const observerOptions = { threshold: 0.3, rootMargin: '0px 0px -10% 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const t = entry.target;

            const toggle = (selLeft, selRight) => {
                const L = t.querySelector(selLeft);
                const R = t.querySelector(selRight);
                if (entry.isIntersecting) {
                    L?.classList.add('animate');
                    R?.classList.add('animate');
                } else {
                    L?.classList.remove('animate');
                    R?.classList.remove('animate');
                }
            }; 

            if (t.classList.contains('project-section'))   toggle('.project-left', '.project-right');
            if (t.classList.contains('employment-section')) toggle('.employment-left', '.employment-right');
            if (t.classList.contains('education-section'))  toggle('.education-left', '.education-right');
            if (t.classList.contains('bottom-bar')) {
                const endLogo = t.querySelector('.end-logo');
                const endTitle = t.querySelector('.end-title');
                const endSubtitle = t.querySelector('.end-subtitle');
                const socialList = t.querySelector('.social-list');
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
    }, observerOptions);

    qsa(document, '.project-section, .employment-section, .education-section, .bottom-bar')
        .forEach(section => observer.observe(section));
}


/**********************************************************************
******                        Nav Tabs                              ******
**********************************************************************/
function setupNavTabs() {
    qsa(document, '.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (tab.getAttribute('href') === '#') e.preventDefault();
            qsa(document, '.nav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const href = tab.getAttribute('href');
            if (href && href !== '#') window.location.href = href;
        });
    });
}


/**********************************************************************
******                      Initialization                         ******
**********************************************************************/
let languagesData = [];

document.addEventListener('DOMContentLoaded', async () => {
    await loadLanguages();          // Load JSON
    renderLanguages(languagesData); // Render cards
    setupGlobalCollapse();          // Optional: outside-click collapse

    setupTypingEffect();
    setupScrollAnimations();
    setupNavTabs();
});