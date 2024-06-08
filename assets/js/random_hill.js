function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * 9);
    return 'res/mountains' + randomIndex + '.jpg';
}

document.body.style.backgroundImage = `url('${getRandomImage()}')`;