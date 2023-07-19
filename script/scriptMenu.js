const btnMobile = document.querySelector(".MenuMobile");

function btnAtivo(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector("#nav");
   
    nav.classList.toggle("active");
    nav.classList.remove('dp-menu')
    const content = document.querySelectorAll(".content");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fecha menu");
        content.forEach((cont) => {
            cont.classList.add("inative");
        });
    } else {
        event.currentTarget.setAttribute("aria-label", "Abri menu");
        content.forEach((cont) => {
            cont.classList.remove("inative");
        });
    }
}




btnMobile.addEventListener("click", btnAtivo);
btnMobile.addEventListener("touchstart", btnAtivo);
