console.log("working...");

// nav menu part
let menu = document.querySelector("#menu");
const openMenu = () => {
    menu.style.right = "0";
}
const closeMenu = () => {
    menu.style.right = "-200px";
}

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

// feedback form data script
const scriptURL = 'https://script.google.com/macros/s/AKfycby6-aWyrEd9ZgxWTi7LYQJe9C2Aj9mQlDUFUpcurZ-PPUyGODBdvwgVieEe9XfNClU2Bg/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("succ-msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Feedback sent successfully!";
        setTimeout(function() {
            message.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })