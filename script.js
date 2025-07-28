document.addEventListener('DOMContentLoaded', function () {

    //get the DOM elements
    const boxcolor = document.getElementById("color-box")
    const changecolorbtn = document.getElementById("change-color-btn")


    // Function to generate random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // Add click event listener to the button
    changecolorbtn.addEventListener('click', function() {
        const randomColor = getRandomColor();
        boxcolor.style.backgroundColor = randomColor;
    });

}
)