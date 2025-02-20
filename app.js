const trigger_search = document.querySelector('.trigger_search');
const input = document.querySelector('.input');

trigger_search.addEventListener('click', () => {
    if (!input.classList.contains('input-open')) {
        input.classList.add('input-open');
        trigger_search.innerHTML = "<i class='uil uil-times'></i>";
    } else {
        input.classList.remove('input-open');
        trigger_search.innerHTML = "<i class='uil uil-search'></i>";
    }


});
const video = document.getElementById('landingVideo');
    const seeMoreContent = document.getElementById('seeMoreContent');

    
    video.addEventListener('ended', () => {
        
        video.style.filter = 'brightness(50%)';
        
        
        seeMoreContent.style.display = 'block';
});

const slides = document.querySelectorAll(".slides model-viewer");
const roleImages = document.querySelectorAll(".roles img"); // Keep only one declaration
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }

    // Connect role images to model viewers
    roleImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            showSlide(index);
        });
    });

    // Ensure the buttons are connected and working
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", prevSlide);
        nextButton.addEventListener("click", nextSlide);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// 🎵 Assign unique sound files for each model-viewer
const modelSounds = {
    "akali.glb": new Audio("akali.ogg"),
    "panth.glb": new Audio("panth.ogg"),
    "ryze.glb": new Audio("ryze.ogg"),
    "mf.glb": new Audio("mf.ogg"),
    "soraka.glb": new Audio("soraka.ogg"),
    "braum.glb": new Audio("braum.ogg")
};

// Select all model-viewers
const modelViewers = document.querySelectorAll("model-viewer");

// Add event listeners for each model-viewer
modelViewers.forEach(model => {
    model.addEventListener("mouseenter", () => {
        // Extract only the filename (e.g., "akali.glb" from full path)
        const src = model.getAttribute("src").split("/").pop();
        
        if (modelSounds[src]) {
            modelSounds[src].currentTime = 0; // Reset the sound
            modelSounds[src].play(); // Play the assigned sound
        }
    });
});

// 🎵 Load the audio file for role selection
const roleSound = new Audio("click.mp3");

// Add hover event to all role images
roleImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
        roleSound.currentTime = 0; // Restart audio
        roleSound.play();
    });
});

