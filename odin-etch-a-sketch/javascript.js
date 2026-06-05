let defaultSize = 16;
let container = document.querySelector(".container")

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