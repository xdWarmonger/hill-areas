const images = [
    'res/mountains001.jpg',
    'res/mountains002.jpg',
    'res/mountains003.jpg',
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

document.body.style.backgroundImage = `url('${getRandomImage()}')`;