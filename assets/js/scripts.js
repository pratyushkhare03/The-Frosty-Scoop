// Enhanced responsive interactions
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                if (window.innerWidth > 768) {
                    this.style.transform = 'translateX(15px) scale(1.05)';
                } else {
                    this.style.transform = 'scale(1.02)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
            });
            
            // Touch events for mobile
            item.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            item.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Responsive ripple effect
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                
                let x, y;
                if (e.type === 'touchstart' || e.type === 'touchend') {
                    const touch = e.changedTouches[0];
                    x = touch.clientX - rect.left - size / 2;
                    y = touch.clientY - rect.top - size / 2;
                } else {
                    x = e.clientX - rect.left - size / 2;
                    y = e.clientY - rect.top - size / 2;
                }
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .nav-item {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);

        // Responsive parallax effect
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 768) {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelector('.hero');
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Handle orientation changes
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                // Refresh layout after orientation change
                window.scrollTo(0, 0);
            }, 100);
        });

        // Optimize performance on mobile
        if (window.innerWidth <= 768) {
            // Disable some animations on mobile for better performance
            const circles = document.querySelectorAll('.circle');
            circles.forEach(circle => {
                circle.style.display = 'none';
            });
        }