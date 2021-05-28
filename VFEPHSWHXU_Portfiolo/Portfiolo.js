let spinnerEl = document.getElementById("spinner");
let navbarEl = document.getElementById("navbar");
let aboutMeSectionEl = document.getElementById("aboutMeSection");
let skillsSectionEl = document.getElementById("skillsSection");
let projectsSectionEl = document.getElementById("projectsSection");
let contactMeSectionEl = document.getElementById("contactMeSection");
let count = 0;
let interval = setInterval(function() {
    count = count + 1;
    if (count === 2) {
        clearInterval(interval);
        spinnerEl.classList.add("d-none");
        navbarEl.classList.remove("d-none");
        aboutMeSectionEl.classList.remove("d-none");
        skillsSectionEl.classList.remove("d-none");
        projectsSectionEl.classList.remove("d-none");
        contactMeSectionEl.classList.remove("d-none");
        console.log(aboutMeSectionEl);
    }
}, 1000);