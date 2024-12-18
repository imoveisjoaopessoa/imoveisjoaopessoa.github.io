// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];

// Add click event to each zoomable image
document.querySelectorAll('.zoomable').forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = image.getAttribute("data-src");
        captionText.innerHTML = image.alt; // Display image description as caption
    });
});

// Close modal when clicking on the "X"
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Optional: Close modal when clicking outside the modal image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
