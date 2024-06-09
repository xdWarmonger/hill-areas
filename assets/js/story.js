// Wait for the DOM to be fully loaded before executing any code
document.addEventListener("DOMContentLoaded", function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the path to the story HTML file
    var storyPath = "/res/about_me";

    // Open a GET request to fetch the story HTML file
    xhr.open("GET", storyPath);

    // Define the onload function
    xhr.onload = function() {
        // Check if the request was successful (status code 200)
        if (xhr.status === 200) {
            // Get the response text (HTML content)
            var storyContent = xhr.responseText;

            // Insert the story HTML content into the corresponding div
            document.getElementById("story").innerHTML = storyContent;
        }
    };

    // Send the request
    xhr.send();
});
