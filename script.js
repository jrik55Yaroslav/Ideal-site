document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Додаємо плавний скрол до розділів
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Додаємо анімацію до елементів при прокручуванні
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Показуємо/ховаємо меню на мобільних пристроях
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Показуємо зворотній зв'язок при наведенні на соціальні іконки
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered');
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('hovered');
        });
    });
});
