       // Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Fungsi untuk menampilkan loader
        function showLoader(element) {
            event.preventDefault();
            // Tampilkan modal loading
            const loadingModal = document.getElementById('loading-modal');
            loadingModal.classList.remove('hidden');
            loadingModal.classList.add('flex');
            
            // Dapatkan URL WhatsApp dari link
            const whatsappUrl = element.href;
            
            // Redirect ke WhatsApp setelah 1.5 detik
            setTimeout(function() {
                window.open(whatsappUrl, '_blank');
                // Tutup loading modal setelah 0.5 detik lagi
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
            
            // Observe semua product card (non-latest)
            document.querySelectorAll('.product-card:not(.latest-product-card)').forEach(card => {
                observer.observe(card);
            });
            
            // Observe latest product card inner content
            const latestCard = document.querySelector('.latest-product-card');
            if (latestCard) {
                observer.observe(latestCard);
            }
        });
