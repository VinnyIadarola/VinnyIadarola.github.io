document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const texts = [
        "computer engineer.",
        "computer scientist.",
        "mathematician.",
        "teacher of science."
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

        let typeSpeed = isDeleting ? 75 : 100;
        setTimeout(typeText, typeSpeed);
    }

    typeText();

    // Tab switching
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (tab.getAttribute('href') === '#') e.preventDefault();
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const href = tab.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });

    // Card flip functionality
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('expanded')) {
                card.classList.remove('expanded');
            } else {
                document.querySelectorAll('.card.expanded').forEach(c => c.classList.remove('expanded'));
                card.classList.add('expanded');
            }
        });
    });

    // Close card if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.card')) {
            document.querySelectorAll('.card.expanded').forEach(card => {
                card.classList.remove('expanded');
            });
        }
    });

    // Tooltip toggle
    window.toggleTooltip = function(container) {
        document.querySelectorAll('.contact-icon-container').forEach(c => {
            if (c !== container) c.classList.remove('active');
        });
        container.classList.toggle('active');
    };

    // Close tooltip on outside click
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.contact-icon-container')) {
            document.querySelectorAll('.contact-icon-container').forEach(container => {
                container.classList.remove('active');
            });
        }
    });

    // Copy text to clipboard
    window.copyText = function(button, text) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.classList.add('copied');

            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 1500);
        }).catch(err => {
            console.error('Could not copy text: ', err);
            button.textContent = 'Error';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 1500);
        });
    };

    // Smooth hover effects
    document.querySelectorAll('.contact-icon-container').forEach(container => {
        let hoverTimeout;

        container.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
        });

        container.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                // Placeholder for cleanup
            }, 100);
        });
    });
});
