// Function Switch Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Typewriter Effect
const words = ["Information Systems Student", "UI/UX Enthusiast", "Product Management"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextSpan = document.getElementById("typed-text");

function type() {
    if (!typedTextSpan) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, 500);
});