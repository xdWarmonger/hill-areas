// Wait for the DOM to be fully loaded before executing any code
document.addEventListener("DOMContentLoaded", function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the path to the header HTML file
    var headerPath = "/pages/header.html";

    // Open a GET request to fetch the header HTML file
    xhr.open("GET", headerPath);

    // Define the onload function
    xhr.onload = function() {
        // Check if the request was successful (status code 200)
        if (xhr.status === 200) {
            // Get the response text (HTML content)
            var headerContent = xhr.responseText;

            // Insert the header HTML content into the corresponding div
            document.getElementById("header").innerHTML = headerContent;
        }
    };

    // Send the request
    xhr.send();
});
