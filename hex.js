const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



const button = document.getElementById('btn');
const colorName = document.querySelector('.color');

function getRandomDigit() {
    return Math.floor(Math.random() * hex.length);


}

button.addEventListener('click', function () {
    //initializing the hex code
    let color = '#'

    //loop
    for (let i = 0; i < 6; i++) {
        color += hex[getRandomDigit()]
    }
    //styles
    document.body.style.backgroundColor = color;
    colorName.textContent = color

    //test
    console.log(color)

})




































//a small explanation

/*So, getRandomNumber generates an index and then returns the value
 at that index in the hex array, which can be a number or a letter. */
