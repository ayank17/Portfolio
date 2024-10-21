document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded");

    // Add form submission handling if needed in the future
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation for the Contact Me section
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const message = document.querySelector('textarea[placeholder="Your Message"]');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully!');
    }
});

// Blog "Read More" functionality
const blogPosts = document.querySelectorAll('.blog-post');
blogPosts.forEach(post => {
    const button = post.querySelector('.button');
    const originalText = post.querySelector('p').innerText;

    button.addEventListener('click', function (e) {
        e.preventDefault();
        const paragraph = post.querySelector('p');
        if (button.innerText === 'Read More') {
            paragraph.innerText = originalText + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nibh purus.';
            button.innerText = 'Read Less';
        } else {
            paragraph.innerText = originalText;
            button.innerText = 'Read More';
        }
    });
});
// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Display a simple alert (replace with actual submission logic)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset the form fields
    event.target.reset();
});
// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function animateOnScroll() {
    var blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(function(post) {
        if (isElementInViewport(post)) {
            post.classList.add('animate');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Trigger the animation when the page loads (in case the blogs are already in view)
document.addEventListener('DOMContentLoaded', animateOnScroll);

