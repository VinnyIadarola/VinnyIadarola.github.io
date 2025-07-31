  document.addEventListener('DOMContentLoaded', () => {
            // Typing Effect
            const texts = [
                "computer engineer.",
                "computer scientist.",
                "mathematician.",
                "teacher."

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

            // Scroll animations with reverse functionality
            const observerOptions = {
                threshold: 0.3,
                rootMargin: '0px 0px -10% 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const target = entry.target;
                    
                    if (entry.isIntersecting) {
                        // Animate in when entering viewport
                        if (target.classList.contains('project-section')) {
                            target.querySelector('.project-left').classList.add('animate');
                            target.querySelector('.project-right').classList.add('animate');
                        }
                        
                        if (target.classList.contains('employment-section')) {
                            target.querySelector('.employment-left').classList.add('animate');
                            target.querySelector('.employment-right').classList.add('animate');
                        }
                        
                        if (target.classList.contains('education-section')) {
                            target.querySelector('.education-left').classList.add('animate');
                            target.querySelector('.education-right').classList.add('animate');
                        }
                        
                        if (target.classList.contains('bottom-bar')) {
                            target.querySelector('.end-logo').classList.add('animate');
                            target.querySelector('.end-title').classList.add('animate');
                            target.querySelector('.end-subtitle').classList.add('animate');
                            target.querySelector('.social-list').classList.add('animate');



                    
                        }
                    } else {
                        // Animate out when leaving viewport
                        if (target.classList.contains('project-section')) {
                            target.querySelector('.project-left').classList.remove('animate');
                            target.querySelector('.project-right').classList.remove('animate');
                        }
                        
                        if (target.classList.contains('employment-section')) {
                            target.querySelector('.employment-left').classList.remove('animate');
                            target.querySelector('.employment-right').classList.remove('animate');
                        }
                        
                        if (target.classList.contains('education-section')) {
                            target.querySelector('.education-left').classList.remove('animate');
                            target.querySelector('.education-right').classList.remove('animate');
                        }
                        
                        if (target.classList.contains('bottom-bar')) {
                            target.querySelector('.end-logo').classList.remove('animate');
                            target.querySelector('.end-title').classList.remove('animate');
                            target.querySelector('.end-subtitle').classList.remove('animate');
                            target.querySelector('.social-list').classList.remove('animate');
                        }
                    }
                });
            }, observerOptions);

            // Observe all sections
            document.querySelectorAll('.project-section, .employment-section, .education-section, .bottom-bar').forEach(section => {
                observer.observe(section);
            });

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

            // Card flip & expand
            const grid = document.getElementById('cardGrid');

            document.querySelectorAll('.card').forEach(card=>{
            card.addEventListener('click', e=>{
                const expanded = card.classList.toggle('expanded');
                // keep only one expanded card
                if(expanded){
                document.querySelectorAll('.card.expanded')
                        .forEach(c=> c!==card && c.classList.remove('expanded'));
                grid.classList.add('grid-expanded');
                }else{
                grid.classList.remove('grid-expanded');
                }
            });
            });

            // collapse when clicking outside
            document.addEventListener('click', e=>{
            if(!e.target.closest('.card')){
                document.querySelectorAll('.card.expanded')
                        .forEach(c=>c.classList.remove('expanded'));
                grid.classList.remove('grid-expanded');
            }
            });
        });