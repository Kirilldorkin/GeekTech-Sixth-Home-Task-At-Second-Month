const openPopUp = document.querySelector("#open_pop-up");
const closePopUp = document.querySelector("#close");
const popUp = document.querySelector(".pop-up");

openPopUp.addEventListener("click", (e) => {
    e.preventDefault();
    popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
});

popUp.addEventListener("click", () => {
    popUp.classList.remove("active");
});


const themeSwitchers = document.querySelectorAll(".change-theme");

themeSwitchers.forEach(switcher => {
    switcher.addEventListener("click", function() {
        // alert(this.dataset.theme);
        applyTheme(this.dataset.theme);
        localStorage.setItem("theme", this.dataset.theme);
    });
});


function applyTheme(themeName) {
    let themeUrl = `./css/theme-${themeName}.css`;
    // alert(themeUrl);
    document.querySelector("[title='theme']").setAttribute("href", themeUrl);
}


let activeTheme = localStorage.getItem("theme");

if (activeTheme === null) {
    applyTheme("light");
}

else {
    applyTheme(activeTheme);
}