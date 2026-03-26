        // Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Filtering Artikel
        const filterAll = document.getElementById('filter-all');
        const filterNews = document.getElementById('filter-news');
        const filterPromo = document.getElementById('filter-promo');
        const articles = document.querySelectorAll('.article-card');
        const emptyState = document.getElementById('empty-state');

        function filterArticles(category) {
            let visibleCount = 0;
            
            articles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');
                
                if (category === 'all' || articleCategory === category) {
                    article.style.display = 'block';
                    visibleCount++;
                    article.classList.add('fade-in');
                } else {
                    article.style.display = 'none';
                }
            });
            
            if (visibleCount === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
            }
        }

        filterAll.addEventListener('click', function() {
            filterAll.classList.add('active');
            filterNews.classList.remove('active');
            filterPromo.classList.remove('active');
            filterArticles('all');
        });

        filterNews.addEventListener('click', function() {
            filterAll.classList.remove('active');
            filterNews.classList.add('active');
            filterPromo.classList.remove('active');
            filterArticles('news');
        });

        filterPromo.addEventListener('click', function() {
            filterAll.classList.remove('active');
            filterNews.classList.remove('active');
            filterPromo.classList.add('active');
            filterArticles('promo');
        });

        filterArticles('all');

        // Smooth scroll untuk anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.startsWith('#') && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Animasi fade-in untuk card saat scroll
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
            
            document.querySelectorAll('.article-card').forEach(card => {
                observer.observe(card);
            });
        });