// =========================================
// JavaScript Global untuk Halaman Detail Artikel
// Berita & Promo Hino - Marketing Hino
// =========================================

// Menunggu DOM siap
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. Mobile Menu Toggle ==========
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // ========== 2. Fungsi Share Artikel ==========
    window.shareArticle = function(title, url) {
        // Gunakan URL saat ini jika tidak disediakan
        const shareUrl = url || window.location.href;
        const shareTitle = title || document.title;
        
        // Cek apakah browser mendukung Web Share API (mobile)
        if (navigator.share) {
            navigator.share({
                title: shareTitle,
                url: shareUrl
            }).catch(err => {
                console.log('Error sharing:', err);
                fallbackCopyToClipboard(shareUrl);
            });
        } else {
            // Fallback: copy ke clipboard
            fallbackCopyToClipboard(shareUrl);
        }
    };
    
    // Fungsi fallback copy ke clipboard
    function fallbackCopyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Link artikel berhasil disalin!');
        }).catch(() => {
            // Jika clipboard tidak berhasil, alert
            alert('Salin link ini: ' + text);
        });
    }
    
    // ========== 3. Toast Notification ==========
    function showToast(message, duration = 3000) {
        // Hapus toast yang sudah ada
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Buat toast baru
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <i class="fas fa-check-circle mr-2 text-green-400"></i>
            ${message}
        `;
        document.body.appendChild(toast);
        
        // Hapus setelah durasi
        setTimeout(() => {
            toast.remove();
        }, duration);
    }
    
    // ========== 4. Smooth Scroll untuk Anchor Links ==========
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
    
    // ========== 5. Animasi Fade In untuk Elemen ==========
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    
    if (fadeElements.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        fadeElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // ========== 6. Table Responsive Wrapper ==========
    // Membungkus semua tabel dengan div overflow-auto untuk responsif
    const tables = document.querySelectorAll('.article-content table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('overflow-x-auto')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'overflow-x-auto';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
    
    // ========== 7. Update Tanggal Otomatis (opsional) ==========
    const dateElement = document.getElementById('article-date');
    if (dateElement) {
        const publishDate = dateElement.getAttribute('data-date');
        if (publishDate) {
            const date = new Date(publishDate);
            const formattedDate = date.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
            dateElement.textContent = formattedDate;
        }
    }
    
    // ========== 8. Floating WhatsApp tetap ada ==========
    // Sudah ada di HTML, tidak perlu tambahan
});