const colors = ['red', 'green', 'blue'];
let colorParagraph = [];

(function init() {

    let domList = document.querySelectorAll('p');

    for (let g = 0; g < domList.length; g++) {

        let paragraph = domList[g];

        colorParagraph[g] = 0;

        paragraph.addEventListener('click', function () {

            let colorIndex = colorParagraph[g];

            paragraph.style.color = colors[colorIndex];

            colorIndex++;

            if (colorIndex === 3) {
                colorIndex = 0;
            }

            colorParagraph[g] = colorIndex;
        })

    }
})();
