function toggleGuestWriting() {
    const form = document.getElementById("guest-writing");

    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
    } else {
        form.classList.add("hidden");
    }
}

function scrollToSection(event, sectionId){
    event.preventDefault(); // stop default jump

    const section = document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });
}