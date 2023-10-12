const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



const button = document.getElementById('btn');
const colorName = document.querySelector('.color');

button.addEventListener('click', function () {
    let hexColor = '#';


    // loop
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }



    // styles
    document.body.style.backgroundColor = hexColor;
    colorName.textContent = hexColor;




    console.log(hexColor)
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}







































//a small explanation

/*So, getRandomNumber generates an index and then returns the value
 at that index in the hex array, which can be a number or a letter. */
