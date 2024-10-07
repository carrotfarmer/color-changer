let colors = ["red", "green", "blue", "yellow", "black", "white", "gray", "magenta", "pink", "brown"];

let btn = document.getElementById("btn");
let container = document.getElementById("bg");

btn.addEventListener("click", () => {
    console.log("clicked");
    let randColor = colors[Math.floor(Math.random() * colors.length) + 1];

    container.style.background = randColor;
});
