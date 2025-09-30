// Shrink navigation on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simple testimonial slider (can be improved with libraries like Swiper.js)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Auto-play testimonials
// setInterval(() => {
//     currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//     showTestimonial(currentTestimonial);
// }, 5000);

// Initial show
// showTestimonial(currentTestimonial);
