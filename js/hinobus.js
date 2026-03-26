        // Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Fungsi untuk menampilkan loader
        function showLoader(element) {
            event.preventDefault();
            const loadingModal = document.getElementById('loading-modal');
            loadingModal.classList.remove('hidden');
            loadingModal.classList.add('flex');
            
            const whatsappUrl = element.href;
            
            setTimeout(function() {
                window.open(whatsappUrl, '_blank');
                setTimeout(function() {
                    loadingModal.classList.add('hidden');
                    loadingModal.classList.remove('flex');
                }, 500);
            }, 1500);
        }

        // Animasi untuk kartu produk saat scroll
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.product-card').forEach(card => {
                observer.observe(card);
            });
        });