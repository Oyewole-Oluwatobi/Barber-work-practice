// ===================== CONFIGURATION =====================
// EASILY EDITABLE SETTINGS - Customize these values
const CONFIG = {
    businessName: 'FreshCut Barbers',
    phoneNumber: '+919876543210', // Include country code
    whatsappNumber: '919876543210', // Without + or spaces
    whatsappMessage: "Hi FreshCut Barbers! I'd like to book an appointment.",
    location: '123 Main Street, Downtown, Your City',
};

// ===================== MOBILE MENU TOGGLE =====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// ===================== BOOKING BUTTONS =====================
// Main CTA Button on Hero Section
const bookBtn = document.getElementById('bookBtn');
if (bookBtn) {
    bookBtn.addEventListener('click', openWhatsApp);
}

// Navbar CTA Button
const bookBtnNav = document.getElementById('bookBtnNav');
if (bookBtnNav) {
    bookBtnNav.addEventListener('click', openWhatsApp);
}

// WhatsApp Button in Contact Section
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', openWhatsApp);
}

// Call Button in Contact Section
const callBtn = document.getElementById('callBtn');
if (callBtn) {
    callBtn.addEventListener('click', function() {
        window.location.href = `tel:${CONFIG.phoneNumber}`;
    });
}

// Function to open WhatsApp
function openWhatsApp() {
    const message = encodeURIComponent(CONFIG.whatsappMessage);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// ===================== SCROLL ANIMATIONS =====================
// Observe elements and trigger animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation to visible elements
            entry.target.style.animation = getAnimationForElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Function to get appropriate animation based on element type or class
function getAnimationForElement(element) {
    const classList = element.className.toLowerCase();
    
    if (classList.includes('service-card')) {
        return 'fadeInUp 0.8s ease forwards';
    } else if (classList.includes('gallery-item')) {
        return 'fadeInUp 0.8s ease forwards';
    } else if (classList.includes('testimonial-card')) {
        return 'fadeInUp 0.8s ease forwards';
    }
    return 'fadeInUp 0.8s ease forwards';
}

// Observe all animated elements
document.querySelectorAll(
    '.service-card, .gallery-item, .testimonial-card, .section-title'
).forEach(element => {
    observer.observe(element);
});

// ===================== SERVICE CARD HOVER EFFECT =====================
// Add enhanced hover effects to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================== GALLERY IMAGE ZOOM =====================
// Add zoom effect to gallery images on hover
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

// ===================== SMOOTH SCROLL NAVIGATION =====================
// Smooth scroll for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================== BUTTON ANIMATIONS =====================
// Add ripple effect to buttons on click
function addButtonRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add click event listeners to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', addButtonRipple);
});

// ===================== NAVBAR SCROLL EFFECT =====================
// Change navbar appearance on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(212, 175, 55, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===================== ACTIVE NAV LINK HIGHLIGHT =====================
// Highlight active section in navigation
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================== TYPING ANIMATION (Optional Enhancement) =====================
// Add pulsing effect to hero title
function pulseHeroTitle() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setInterval(() => {
            heroTitle.style.textShadow = '0 0 20px rgba(212, 175, 55, 0.8), 2px 2px 10px rgba(0, 0, 0, 0.8)';
            setTimeout(() => {
                heroTitle.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
            }, 500);
        }, 2000);
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', pulseHeroTitle);

// ===================== FORM VALIDATION & ALERTS =====================
// Alert when service card is clicked
serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').textContent;
        alert(`✂️ ${serviceName} selected!\n\nClick "Book Now" to schedule your appointment on WhatsApp.`);
    });
});

// ===================== PAGE LOAD ANIMATION =====================
// Fade in page content on load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// ===================== TOUCH EVENTS FOR MOBILE =====================
// Enhanced touch interactions for mobile users
if ('ontouchstart' in window) {
    document.querySelectorAll('.service-card, .testimonial-card').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===================== CONSOLE WELCOME MESSAGE =====================
console.log('%c🎉 Welcome to FreshCut Barbers!', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cTo customize the website, edit the CONFIG object in script.js', 'color: #cccccc; font-size: 12px;');
console.log('%c📞 Phone: ' + CONFIG.phoneNumber, 'color: #d4af37;');
console.log('%c📍 Location: ' + CONFIG.location, 'color: #d4af37;');

// ===================== ADDITIONAL UTILITIES =====================

/**
 * CUSTOMIZATION GUIDE:
 * 
 * 1. CHANGE BUSINESS DETAILS:
 *    - Update the CONFIG object at the top of this file
 *    - Change phoneNumber, whatsappNumber, businessName, etc.
 * 
 * 2. CHANGE SERVICES:
 *    - Edit the HTML in index.html
 *    - Find the "Services Section" and update service cards
 *    - Change service names, descriptions, and prices
 * 
 * 3. CHANGE COLORS:
 *    - Edit the CSS variables in style.css
 *    - Look for :root section at the top
 *    - Change --gold, --primary-dark, etc.
 * 
 * 4. CHANGE IMAGES:
 *    - Update image URLs in index.html
 *    - Replace Unsplash URLs with your own images
 *    - Update gallery and hero section images
 * 
 * 5. ADD ANIMATIONS:
 *    - Edit keyframes in style.css
 *    - Modify animation values and properties
 * 
 * Need help? Check HTML comments marked with "EDIT:"
 */
