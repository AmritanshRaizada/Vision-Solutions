
document.addEventListener('DOMContentLoaded', () => {

    initAnimations();
});

function initAnimations() {
    // Create a main timeline
    const mainTimeline = gsap.timeline({
        defaults: {
            ease: 'power3.out'
        }
    });
    
    // Header background animation
    mainTimeline.fromTo('.header-bg', {
        opacity: 0,
        scale: 0.8,
    }, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
    }, 0);
    
    // Team text animation
    mainTimeline.fromTo('.header-title-span', {
        opacity: 0,
        y: -50,
        rotation: -5
    }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.2
    }, 0.3);
    
    // Responsibilities text animation
    mainTimeline.fromTo('.header-title-main', {
        opacity: 0,
        x: -80,
        skewX: 10
    }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1.3,
    }, 0.5);
    
    // Header line animation
    mainTimeline.fromTo('.header-line', {
        width: 0,
        opacity: 0,
    }, {
        width: '80px',
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut'
    }, 0.8);
    
    // Text reveal for subtitle
    mainTimeline.fromTo('.header-subtitle', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    }, 1);
    
    // floating animation for the bg circle -> unnec
    gsap.to('.header-bg', {
        x: 20,
        y: -15,
        scale: 1.05,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    const cards = document.querySelectorAll('.card');
    
    // reset card animations
    gsap.set(cards, { opacity: 0, y: 30 });
    
    // create a separate timeline for cards
    const cardsTimeline = gsap.timeline({
        defaults: { 
            ease: 'power2.out'
        },
        scrollTrigger: {
            trigger: '.cards-container',
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
        }
    });
    
    // animate card
    cardsTimeline.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15
    });
    
    // animate divider
    gsap.fromTo('.divider', {
        scaleX: 0,
        opacity: 0
    }, {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.divider',
            start: 'top bottom-=50'
        }
    });
    
    // Animate footer
    gsap.fromTo('footer', {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top bottom-=30'
        }
    });
    
    // txt split animation on hover for title
    const titleElement = document.querySelector('.header-title-main');
    
    titleElement.addEventListener('mouseenter', () => {
        gsap.to('.header-title-main', {
            color: '#4568dc',
            duration: 0.3
        });
        
        gsap.to('.header-bg', {
            scale: 1.2,
            opacity: 0.7,
            duration: 1,
            ease: 'power1.out'
        });
    });
    
    titleElement.addEventListener('mouseleave', () => {
        gsap.to('.header-title-main', {
            color: '#000',
            duration: 0.3
        });
        
        gsap.to('.header-bg', {
            scale: 1.05,
            opacity: 1,
            duration: 1,
            ease: 'power1.out'
        });
    });
} 
document.querySelectorAll('#accordion label').forEach((label) => {
    label.addEventListener('click', (e) => {
        const radio = document.getElementById(label.getAttribute('for'));

        if (radio.checked) {
            radio.checked = false;
            e.preventDefault();
        }
    });
});
function toggleMenu() {
    mobileMenu.classList.toggle('show');
    // document.getElementById('nav-backdrop').style.display = mobileMenu.classList.contains('show') ? 'block' : 'none';
  }