const menuIcon = document.querySelector(".menu-icon");
const navbarList = document.querySelector(".navbar-list")

function toggleMenu() {
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.add("fa-times");
        menuIcon.classList.remove("fa-bars");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }

    if (navbarList.style.display === "" ||
        navbarList.style.display === "none") {
        navbarList.style.display = "block"
    } else {
        navbarList.style.display = "none"
    }

}
