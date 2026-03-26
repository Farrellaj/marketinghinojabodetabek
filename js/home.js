        // Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Auto-Slide Background
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;
            
            // Fungsi untuk mengubah slide
            function nextSlide() {
                // Nonaktifkan slide saat ini
                slides[currentSlide].classList.remove('active');
                
                // Pindah ke slide berikutnya
                currentSlide = (currentSlide + 1) % slides.length;
                
                // Aktifkan slide baru
                slides[currentSlide].classList.add('active');
            }
            
            // Mulai auto-slide setiap 5 detik
            setInterval(nextSlide, 5000);
            
            // Smooth scrolling untuk anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    if (href !== '#' && href.startsWith('#') && document.querySelector(href)) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            window.scrollTo({
                                top: target.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
            
            // Close chat widget
            const closeChatBtn = document.getElementById('close-chat');
            if (closeChatBtn) {
                closeChatBtn.addEventListener('click', function() {
                    document.getElementById('sales-chat-widget').style.display = 'none';
                });
            }
            
            // Show chat widget after 3 seconds
            setTimeout(function() {
                const chatWidget = document.getElementById('sales-chat-widget');
                if (chatWidget) chatWidget.style.display = 'block';
            }, 3000);
        });