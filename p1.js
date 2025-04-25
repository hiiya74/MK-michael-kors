document.querySelectorAll('.hover-image').forEach(img => {
    img.addEventListener('mouseover', function() {
        let hoverSrc = this.getAttribute('data-hover');
        if (hoverSrc) {
            this.dataset.original = this.src; // Store original src
            this.src = hoverSrc; // Change to hover image
        }
    });

    img.addEventListener('mouseout', function() {
        if (this.dataset.original) {
            this.src = this.dataset.original; // Revert to original image
        }
    });
});
function toggleSearchBox() {
    var searchBox = document.getElementById("search-box");
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";  // Show search box
    } else {
        searchBox.style.display = "none";  // Hide search box
    }
}