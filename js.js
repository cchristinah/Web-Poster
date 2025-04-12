//Beyond Bias Title scroll event
document.addEventListener('scroll', function () {
    const scrollHeader = document.querySelector('.scroll-header'); // Select the header
    const headerContent = document.querySelector('.header-content'); // Select the text content
    const scrollPosition = window.scrollY; // Get the scroll position

    // Check if the user has scrolled down enough
    if (scrollPosition > 100) { // scrolls 100px down, event occurs
        scrollHeader.classList.add('visible'); // fades in text
    } else {
        scrollHeader.classList.remove('visible'); // fades text out if scrolls back up
    }

    const sections = document.querySelectorAll('.lecture-section'); //selects all elements with the class 'lecture-section'

    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Get the section's position relative to the viewport
        const windowHeight = window.innerHeight;

        // Check if the section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
            console.log(`Section in view: ${section.id}`);
            const layers = section.querySelectorAll('.collage-layer'); // Get all collage layers in the section

            // Reveal layers one by one with a delay
            layers.forEach((layer, index) => {
                setTimeout(() => {
                    console.log(`Revealing layer ${index + 1} in section ${section.id}`);
                    layer.classList.add('visible'); // Add the visible class to reveal the layer
                }, index * 300); // Delay each layer by 300ms
            });
        } else {
            console.log(`Section out of view: ${section.id}`);
            const layers = section.querySelectorAll('.collage-layer'); // Get all collage layers in the section

            // Remove the visible class to fade out the layers
            layers.forEach(layer => {
                layer.classList.remove('visible');
            });
        }
    });
});

function toggleText(textId, toggleElement) {
    console.log(`Toggling text for: ${textId}`); // Debugging log
    const textContainer = document.getElementById(textId);
    if (textContainer) {
        textContainer.classList.toggle('expanded'); // Toggle the 'expanded' class

        // Update the "+" or "-" icon
        const icon = toggleElement.querySelector('.toggle-icon');
        if (textContainer.classList.contains('expanded')) {
            icon.textContent = "-"; // Change to "-" when expanded
        } else {
            icon.textContent = "+"; // Change to "+" when collapsed
        }
    } else {
        console.error(`Element with id "${textId}" not found.`);
    }
}

function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    box.classList.toggle('collapsed'); // Toggle the 'collapsed' class
}




