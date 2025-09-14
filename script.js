function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    
    // Show selected page
    const pageMap = {
        'home': 'home-page',
        'services': 'services-page',
        'graphics': 'graphics-page',
        'about': 'about-page',
        'contact': 'contact-page'
    };
    
    document.getElementById(pageMap[page]).classList.remove('hidden');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-gray-900');
        link.classList.add('text-gray-600');
    });
    
    // Close mobile menu
    document.getElementById('mobile-menu').classList.add('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! This is a demo form. In a real implementation, this would send your message to our team.');
}

function bookMeeting() {
    alert('Meeting booking feature would integrate with a calendar system like Calendly in a real implementation.');
}

// Carousel functionality
let currentSlide = 1;
const totalSlides = 4;

function goToSlide(slideNumber) {
    // Hide all slides
    for (let i = 1; i <= totalSlides; i++) {
        document.getElementById(`slide-${i}`).style.opacity = '0';
        document.getElementById(`dot-${i}`).classList.remove('glass-button');
        document.getElementById(`dot-${i}`).classList.add('glass', 'opacity-50');
    }
    
    // Show selected slide
    document.getElementById(`slide-${slideNumber}`).style.opacity = '1';
    document.getElementById(`dot-${slideNumber}`).classList.remove('glass', 'opacity-50');
    document.getElementById(`dot-${slideNumber}`).classList.add('glass-button');
    
    currentSlide = slideNumber;
}

function nextSlide() {
    const next = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    goToSlide(next);
}

function exploreMore() {
    alert('Explore More feature coming soon! This would lead to a portfolio or services showcase.');
}

// Auto-advance carousel
setInterval(nextSlide, 4000);

// Initialize page
showPage('home');