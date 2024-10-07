let btn = document.getElementById("btn");
let imgContainer = document.getElementById("img");

async function getCat() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    return data[0].url;
}

btn.addEventListener("click", async () => {
    let imgUrl = await getCat();
    imgContainer.setAttribute("src", imgUrl);
});
