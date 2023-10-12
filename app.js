const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const colorName = document.querySelector('.color')

button.addEventListener('click', function () {
    let randomNumber = colors[getRandomNumber()];

    // styles
    document.body.style.backgroundColor = randomNumber;
    colorName.textContent = randomNumber;

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}