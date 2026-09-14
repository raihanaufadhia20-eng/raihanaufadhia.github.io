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