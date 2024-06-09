// Wait for the DOM to be fully loaded before executing any code
document.addEventListener("DOMContentLoaded", function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the path to the footer HTML file
    var footerPath = "/pages/footer.html";

    // Open a GET request to fetch the footer HTML file
    xhr.open("GET", footerPath);

    // Define the onload function
    xhr.onload = function() {
        // Check if the request was successful (status code 200)
        if (xhr.status === 200) {
            // Get the response text (HTML content)
            var footerContent = xhr.responseText;

            // Insert the footer HTML content into the corresponding div
            document.getElementById("footer").innerHTML = footerContent;
        }
    };

    // Send the request
    xhr.send();
});
