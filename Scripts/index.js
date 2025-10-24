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

function normalizeYearsValue(raw) {
    if (raw === undefined || raw === null) return '0';
    const str = String(raw).trim();
    if (!str) return '0';

    const numericPattern = /^-?\d+(\.\d+)?$/;
    if (numericPattern.test(str)) {
        const num = Number(str);
        if (Number.isNaN(num) || !Number.isFinite(num)) return '0';
        let normalized = num.toString();
        if (normalized.includes('.')) {
            normalized = normalized
                .replace(/\.0+$/, '')
                .replace(/(\.\d*?)0+$/, '$1')
                .replace(/\.$/, '');
        }
        return normalized === '' ? '0' : normalized;
    }

    return str;
}


/**********************************************************************
******                        Card Creation                        ******
**********************************************************************/
let infoOverlayEl = null;
const CARD_COLLAPSE_DURATION = 240;
const MOBILE_CARD_BREAKPOINT = 900;
let mobileInfoElements = null;
let mobileInfoActive = false;
let lastMobileCardMode = false;

function updateCardState(card, lang, expand) {
    const panel    = qs(card, '.text-content');
    const btn      = qs(card, '.lang-btn');
    const titleEl  = qs(card, '.lang-title');
    const infoLogo = qs(card, '.info-logo');

    const langName = (lang?.name || titleEl?.textContent || '').trim();

    if (btn) {
        if (expand) {
            btn.removeAttribute('aria-disabled');
            btn.setAttribute('href', `projects.html?tag=${encodeURIComponent(langName)}`);
            btn.textContent = langName ? `View ${langName} Projects` : 'View Projects';
        } else {
            btn.setAttribute('aria-disabled', 'true');
            btn.setAttribute('href', '#');
            btn.textContent = 'View Projects';
        }
    }

    if (panel) {
        if (expand) {
            panel.classList.add('info-card');
            panel.setAttribute('role', 'region');
            panel.setAttribute('aria-label', 'Info Card');
        } else {
            panel.classList.remove('info-card');
            panel.removeAttribute('role');
            panel.removeAttribute('aria-label');
        }
    }

    if (infoLogo) {
        infoLogo.style.display = expand ? 'grid' : 'none';
    }

    if (titleEl) {
        if (expand) {
            titleEl.dataset.centered = '1';
        } else {
            delete titleEl.dataset.centered;
        }
    }
}

/**********************************************************************
******                  Mobile Info Card Helpers                   ******
**********************************************************************/
function shouldUseMobileInfoCard() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return false;
    }
    return window.matchMedia(`(max-width: ${MOBILE_CARD_BREAKPOINT}px)`).matches;
}

function ensureMobileInfoElements() {
    if (mobileInfoElements) return mobileInfoElements;

    const wrapper = document.getElementById('mobileInfoWrapper');
    if (!wrapper) return null;

    mobileInfoElements = {
        wrapper,
        backdrop: wrapper.querySelector('[data-role="mobile-info-backdrop"]'),
        card: wrapper.querySelector('.mobile-info-card'),
        close: wrapper.querySelector('[data-role="mobile-info-close"]'),
        title: wrapper.querySelector('[data-role="mobile-info-title"]'),
        yearsNum: wrapper.querySelector('[data-role="mobile-info-years-num"]'),
        description: wrapper.querySelector('[data-role="mobile-info-description"]'),
        link: wrapper.querySelector('[data-role="mobile-info-link"]'),
        logo: wrapper.querySelector('[data-role="mobile-info-logo"] img'),
    };

    return mobileInfoElements;
}

function buildLangData(card, lang) {
    const yearsFromCard = card?.dataset?.years;

    if (lang) {
        const name = lang.name || '';
        const fromLang = lang.years ?? lang.experienceYears ?? '';
        const yearsRaw = yearsFromCard !== undefined && yearsFromCard !== ''
            ? yearsFromCard
            : fromLang;
        const years = normalizeYearsValue(yearsRaw);

        return {
            id: card?.dataset.langId || lang.id || name.toLowerCase().replace(/\s+/g, '-'),
            name,
            years,
            description: lang.description || '',
            image: lang.image || '',
            alt: lang.alt || (name ? `${name} Logo` : 'Language logo'),
        };
    }

    // Fallback when no lang object (pull from DOM)
    const title = qs(card, '.lang-title')?.textContent?.trim() || '';
    const yearsText = yearsFromCard !== undefined
        ? yearsFromCard
        : qs(card, '.years-num')?.textContent?.trim() || '';
    const descText = qs(card, '.lang-description')?.textContent?.trim() || '';
    const imgEl = qs(card, '.info-logo img') || qs(card, '.language-icon img');

    return {
        id: card?.dataset.langId || title.toLowerCase().replace(/\s+/g, '-'),
        name: title,
        years: normalizeYearsValue(yearsText),
        description: descText,
        image: imgEl?.getAttribute('src') || '',
        alt: imgEl?.getAttribute('alt') || (title ? `${title} Logo` : 'Language logo'),
    };
}







function showMobileInfoCard(card, lang) {
    const els = ensureMobileInfoElements();
    if (!els) return;
    if (!shouldUseMobileInfoCard()) return;

    const data = buildLangData(card, lang);

    mobileInfoActive = true;
    if (els.wrapper.hasAttribute('hidden')) {
        els.wrapper.removeAttribute('hidden');
    }
    els.wrapper.setAttribute('aria-hidden', 'false');
    els.wrapper.classList.add('active');
    els.wrapper.setAttribute('data-lang-id', data.id || '');
    document.body.classList.add('mobile-info-open');



    if (els.logo) {
        if (data.image) {
            els.logo.src = data.image;
        } else {
            els.logo.removeAttribute('src');
        }
        if (data.alt) {
            els.logo.alt = data.alt;
        } else {
            els.logo.removeAttribute('alt');
        }
    }

    if (els.title) {
        els.title.textContent = data.name || 'Details';
    }
    if (els.yearsNum) {
        els.yearsNum.textContent = normalizeYearsValue(data.years);
    }
    if (els.description) {
        els.description.textContent = data.description || '';
    }
    if (els.link) {
        const linkText = data.name ? `View ${data.name} Projects` : 'View Projects';
        els.link.textContent = linkText;
        if (data.name) {
            els.link.setAttribute('href', `projects.html?tag=${encodeURIComponent(data.name)}`);
            els.link.removeAttribute('aria-disabled');
            els.link.removeAttribute('tabindex');
        } else {
            els.link.setAttribute('href', '#');
            els.link.setAttribute('aria-disabled', 'true');
            els.link.setAttribute('tabindex', '-1');
            if (!data.name) {
                els.link.textContent = 'View Projects';
            }
        }
    }

    const overlay = ensureInfoOverlay();
    overlay?.classList.add('active');
    document.body.classList.add('overlay-active');

    if (els.card) {
        window.setTimeout(() => els.card.focus(), 0);
    }
}

function hideMobileInfoCard() {
    const els = ensureMobileInfoElements();
    if (!els || !mobileInfoActive) return;

    mobileInfoActive = false;
    els.wrapper.classList.remove('active');
    els.wrapper.removeAttribute('data-lang-id');
    els.wrapper.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mobile-info-open');

    clearOverlay();
}

function setupMobileInfoCard() {
    const els = ensureMobileInfoElements();
    if (!els) return;

    if (els.wrapper.dataset.mobileInfoInit === '1') return;
    els.wrapper.dataset.mobileInfoInit = '1';

    if (els.close) {
        els.close.addEventListener('click', hideMobileInfoCard);
    }
    if (els.backdrop) {
        els.backdrop.addEventListener('click', hideMobileInfoCard);
    }
    els.wrapper.addEventListener('click', (e) => {
        if (e.target === els.wrapper || e.target === els.backdrop) {
            hideMobileInfoCard();
        }
    });
    if (els.link) {
        els.link.addEventListener('click', (e) => {
            if (els.link.getAttribute('aria-disabled') === 'true') {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            hideMobileInfoCard();
        });
    }
}

function setCardExpanded(card, lang, expand) {
    const grid = qs(document, '#cardGrid');
    const useMobileCard = shouldUseMobileInfoCard();

    if (useMobileCard) {
        if (expand) {
            qsa(document, '.card.expanded').forEach(other => {
                if (other !== card) {
                    other.classList.remove('expanded', 'collapsing', 'modal-mode');
                    delete other.dataset.collapsing;
                    other.setAttribute('aria-expanded', 'false');
                    updateCardState(other, null, false);
                }
            });
            grid?.classList.remove('grid-expanded');
            card.classList.remove('expanded', 'collapsing', 'modal-mode');
            delete card.dataset.collapsing;
            card.setAttribute('aria-expanded', 'false');
            updateCardState(card, lang, false);
            showMobileInfoCard(card, lang);
        } else {
            hideMobileInfoCard();
            card.classList.remove('expanded', 'collapsing', 'modal-mode');
            delete card.dataset.collapsing;
            card.setAttribute('aria-expanded', 'false');
            updateCardState(card, null, false);
            if (!qs(document, '.card.expanded')) {
                grid?.classList.remove('grid-expanded');
            }
        }
        return;
    }

    hideMobileInfoCard();

    if (expand) {
        card.classList.remove('collapsing');
        delete card.dataset.collapsing;
        qsa(document, '.card.expanded').forEach(other => {
            if (other !== card) setCardExpanded(other, null, false);
        });
        card.classList.add('expanded');
        grid?.classList.add('grid-expanded');
        card.setAttribute('aria-expanded', 'true');
        updateCardState(card, lang, true);
        applyOverlayIfNeeded(card);
        return;
    }

    if (!card.classList.contains('expanded')) {
        clearOverlay(card);
        return;
    }

    if (card.dataset.collapsing === '1') {
        return;
    }

    card.dataset.collapsing = '1';
    card.classList.add('collapsing');
    card.setAttribute('aria-expanded', 'false');

    const finalizeCollapse = () => {
        card.classList.remove('expanded');
        card.classList.remove('modal-mode');
        card.classList.remove('collapsing');
        delete card.dataset.collapsing;
        updateCardState(card, null, false);
        if (!qs(document, '.card.expanded')) {
            grid?.classList.remove('grid-expanded');
        }
        clearOverlay(card);
    };

    window.setTimeout(finalizeCollapse, CARD_COLLAPSE_DURATION);
}

function collapseAllCards() {
    hideMobileInfoCard();
    qsa(document, '.card.expanded').forEach(card => setCardExpanded(card, null, false));
}

function ensureInfoOverlay() {
    if (!infoOverlayEl) {
        infoOverlayEl = document.createElement('div');
        infoOverlayEl.className = 'info-overlay';
        infoOverlayEl.setAttribute('data-role', 'info-overlay');
        infoOverlayEl.addEventListener('click', collapseAllCards);
    }

    document.body.appendChild(infoOverlayEl);

    return infoOverlayEl;
}

function applyOverlayIfNeeded(card) {
    const overlay = ensureInfoOverlay();

    requestAnimationFrame(() => {
        if (!card.classList.contains('expanded')) return;

        const wasModal = card.classList.contains('modal-mode');
        if (wasModal) card.classList.remove('modal-mode');

        const infoPanel = qs(card, '.info-card') || qs(card, '.text-content');
        if (!infoPanel) {
            if (wasModal) card.classList.add('modal-mode');
            return;
        }

        const padding = 48;
        const contentHeight = infoPanel.scrollHeight;
        const contentWidth = infoPanel.scrollWidth;

        const cardOverflow =
            infoPanel.scrollHeight > infoPanel.clientHeight + 1 ||
            infoPanel.scrollWidth > infoPanel.clientWidth + 1 ||
            card.scrollHeight > card.clientHeight + 1 ||
            card.scrollWidth > card.clientWidth + 1;

        const viewportTooSmall =
            contentHeight + padding > window.innerHeight ||
            contentWidth + padding > window.innerWidth;

        const needsOverlay = cardOverflow || viewportTooSmall;

        if (needsOverlay) {
            card.classList.add('modal-mode');
            overlay.classList.add('active');
            document.body.classList.add('overlay-active');
        } else {
            card.classList.remove('modal-mode');
            if (!qs(document, '.card.modal-mode')) {
                overlay.classList.remove('active');
                document.body.classList.remove('overlay-active');
            }
        }
    });
}

function clearOverlay(card) {
    card?.classList.remove('modal-mode');

    if (!qs(document, '.card.modal-mode')) {
        infoOverlayEl?.classList.remove('active');
        document.body.classList.remove('overlay-active');
    }
}

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

    const rawYears = lang.years ?? lang.experienceYears ?? '';
    const displayYears = normalizeYearsValue(rawYears);

    yearsNumEl.textContent = displayYears;
    // Persist for mobile info card usage
    card.dataset.years = displayYears;

    descEl.textContent = lang.description || 'Description coming soon.';

    // Button behavior
    langBtn.setAttribute('aria-disabled', 'true');   // start disabled
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // don't toggle card

        // If not expanded yet, expand instead of navigating
        if (!card.classList.contains('expanded')) {
            e.preventDefault();
            setCardExpanded(card, lang, true);
            return;
        }

        // If expanded, ensure href is set with the tag param
        const tagParam = encodeURIComponent(lang.name || '');
        langBtn.setAttribute('href', `projects.html?tag=${tagParam}`);
    });

    // Toggle expand on card
    card.addEventListener('click', () => {
        if (card.dataset.collapsing === '1') return;
        if (card.classList.contains('expanded')) {
            setCardExpanded(card, lang, false);
        } else {
            setCardExpanded(card, lang, true);
        }
    });
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (card.dataset.collapsing === '1') return;
            const shouldExpand = !card.classList.contains('expanded');
            setCardExpanded(card, lang, shouldExpand);
        }
    });

    return card;
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
        if (e.target.closest('.card')) return;
        if (e.target.closest('.mobile-info-card')) return;
        collapseAllCards();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') collapseAllCards();
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
    ensureInfoOverlay();
    setupMobileInfoCard();

    lastMobileCardMode = shouldUseMobileInfoCard();
    if (lastMobileCardMode) {
        clearOverlay();
    }

    setupTypingEffect();
    setupScrollAnimations();
    setupNavTabs();

    window.addEventListener('resize', () => {
        const isMobile = shouldUseMobileInfoCard();

        if (isMobile !== lastMobileCardMode) {
            if (isMobile) {
                collapseAllCards();
            } else {
                hideMobileInfoCard();
            }
        }

        if (!isMobile) {
            const activeCard = qs(document, '.card.expanded');
            if (activeCard) {
                applyOverlayIfNeeded(activeCard);
            } else {
                clearOverlay();
            }
        } else if (!mobileInfoActive) {
            clearOverlay();
        }

        lastMobileCardMode = isMobile;
    });
});
