const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const colorName = document.querySelector('.color');

button.addEventListener('click', function () {
    let color = colors[getRandomNumber()];

    document.body.style.backgroundColor = color;
    colorName.textContent = color;
    console.log(color)

})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}