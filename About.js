document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.story-text, .timeline-item, .benefit-card, .team-card, .value-card, .stat-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Animated counters
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = counter.id === 'years-counter' ? 15 :
                      counter.id === 'brands-counter' ? 200 :
                      counter.id === 'retention-counter' ? 97 : 0;
        const count = () => {
            const countTo = target;
            const countFrom = 0;
            const increment = countTo / speed;
            const currentCount = parseFloat(counter.innerText);
            
            if (currentCount < countTo) {
                counter.innerText = Math.ceil(currentCount + increment);
                setTimeout(count, 10);
            } else {
                counter.innerText = countTo + (counter.id === 'retention-counter' ? '%' : '+');
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                count();
            }
        });
        
        observer.observe(counter);
    });
});

function toggleMenu() {
  mobileMenu.classList.toggle('show');
  // document.getElementById('nav-backdrop').style.display = mobileMenu.classList.contains('show') ? 'block' : 'none';
}