let defaultSize = 16;
let container = document.querySelector(".container")

function makeGrid(size) {
    for (let i = 1; i <= size; i++) {
        let newSubContainer = document.createElement("div")
        newSubContainer.id = "r" + i;
        newSubContainer.className = "subcontainer";
        container.appendChild(newSubContainer)
        for (let j = 1; j <= size; j++) {
            let newSquare = document.createElement("div");
            newSquare.id = "x" + i + "y" + j;
            newSquare.className = "element";
            newSubContainer.appendChild(newSquare)
        }
    }
}

function colorChanger() {
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "red";
        });
    });
}

function reset() {
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => element.remove());

    let newSize = parseInt(prompt("What size of the grid do you want (between 4 and 100)?"), 10);
    if (isNaN(newSize)) {
        reset()
    } else if (newSize > 100 || newSize < 4) {
        reset()
    }

    makeGrid(newSize);
    colorChanger();
}

const button = document.querySelector("button")
button.addEventListener("click", function () { reset(30); });

makeGrid(defaultSize);
colorChanger();