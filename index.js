function getInput() {
    const input = document.getElementById("name").value;
    console.log(input);
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formInput");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        getInput();
    });
});
