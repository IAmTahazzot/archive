// rgb = red, green, blue (combination)
// Each color channel is expressed from 0 (least saturated) to 255 (most saturated).
// We will generate three random color between 0 to 255 which will then reduce to a single rbg color

const randomNumber = () => {
    return Math.floor(Math.random() * 256); // this will generate random number between 0 - 255
}

const generateColor = () => {
    const red = randomNumber(),
        green = randomNumber(),
        blue = randomNumber();

    return `rgb(${red}, ${green}, ${blue})`;
}

// set click event on the button
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = generateColor();
});