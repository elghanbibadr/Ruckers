const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar");

navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
