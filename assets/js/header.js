// Wait for the DOM to be fully loaded before executing any code
document.addEventListener("DOMContentLoaded", function() {
    fetch('/assets/html/header.html')
        .then(response => response.text())
        .then(headerContent => {
            // Insert the header HTML content into the corresponding div
            document.getElementById("header").innerHTML = headerContent;
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
        });
});
