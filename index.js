const container = document.getElementById("the-chosen");
const theChosenOne = document.createElement("p");

function getInput() {
    const input = document.getElementById("name").value;
    const inputfile = document.getElementById("inputFile").value;
    const textVar = input.split("\n").join(",").split(" ").join(",").split(",");
    const lengthList = textVar.length;
    const randNumber = Math.ceil(Math.random() * lengthList) - 1;
    console.log(inputfile);
    console.log(randNumber);
    console.log(lengthList);
    console.log(textVar);
    console.log(input);

    theChosenOne.id = "the-chosen-one";
    theChosenOne.innerText = "The chosen One is " + textVar[randNumber];

    container.append(theChosenOne);
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formInput");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        getInput();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const inputFile = document.getElementById("inputFile");
    inputFile.addEventListener("change", function (event) {
        event.preventDefault();
        const file = event.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (e) {
            const text = e.target.result;
            document.getElementById("name").value = text;
        };
    });
});

function removeChosen() {
    const theChosenOne = document.getElementById("the-chosen-one");
    theChosenOne.remove();
}

document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("name").value = "";
        removeChosen();
    });
});
