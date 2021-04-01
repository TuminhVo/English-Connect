const toggles = document.getElementsByClassName("collapse-toggle");
Array.from(toggles).forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.nextElementSibling.classList.toggle("is-collapsed");
        })
    });