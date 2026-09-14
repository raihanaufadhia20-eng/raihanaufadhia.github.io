const text = "Information Systems Student | UI/UX | Product Management";
const speed = 50; 
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Scroll otomatis ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}