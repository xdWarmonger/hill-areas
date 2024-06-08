function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * 8);
    return 'res/mountains' + randomIndex + '.jpg';
}

function getRandomLineFromString(str)
{
    const quotes = str.trim().split('\n');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomLine = quotes[randomIndex];
    return randomLine;
    
}
function fetchRandomQuote() {
    fetch('res/hillarious')
        .then(response => response.text())
        .then(data => {
            let lines = getRandomLineFromString(data).replace('\\n', '\n');
            document.getElementById('quote-text').textContent = lines;
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
        });
    fetch('res/hillarious_people')
        .then(response => response.text())
        .then(data => {
            document.getElementById('quote-source').textContent = '- ' + getRandomLineFromString(data) + ' -';
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
        });
}

window.addEventListener('load', fetchRandomQuote);

document.body.style.backgroundImage = `url('${getRandomImage()}')`;