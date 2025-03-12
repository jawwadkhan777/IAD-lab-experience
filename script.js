console.log("working...");

// header part
const showGame = () => {
    window.open("http://mathblitz-6.netlify.app", "_blank");
}
const viewCode = () => {
    window.open("https://github.com/HasnainEagle/MathBlitz.git", "_blank");
}

// project descripotion part
let tabLinks = document.getElementsByClassName('tab_links');
let tabContents = document.getElementsByClassName('tab_contents');

document.querySelectorAll(".tab_links").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.currentTarget.classList.add("active_link");
    });
});

const openTab = (tabName) => {
    for(tabLink of tabLinks) tabLink.classList.remove("active_link");
    for(tabContent of tabContents) tabContent.classList.remove("active_tab");

    document.getElementById(tabName).classList.add("active_tab");
}

