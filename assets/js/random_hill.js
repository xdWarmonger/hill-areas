function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * 8);
    return '/res/mountains' + randomIndex + '.jpg';
}

document.body.style.backgroundImage = `url('${getRandomImage()}')`;