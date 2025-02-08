// JavaScript for the single click toggle zoom effect

// Function to handle zooming logic
function handleZoom(gcard) {
    gcard.classList.toggle('zoomed');
}

// Event listener for click to toggle zoom
document.querySelectorAll('.gcard').forEach(gcard => {
    gcard.addEventListener('click', () => {
        handleZoom(gcard);
    });
});

// Event listener to zoom out when clicking outside the zoomed card
document.addEventListener('click', (event) => {
    const zoomedCards = document.querySelectorAll('.gcard.zoomed');
    zoomedCards.forEach(gcard => {
        // Check if click target is outside the zoomed card
        if (!gcard.contains(event.target)) {
            handleZoom(gcard);
        }
    });
});
