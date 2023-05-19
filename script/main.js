const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");

    const selectedTab = document.querySelector(`[onClick="opentab('${tabname}')"]`);
    selectedTab.classList.add("active-link");

    // Agregar esta parte para quitar la clase active-link de los enlaces no seleccionados
    for (let i = 0; i < tablinks.length; i++) {
        if (tablinks[i] !== selectedTab) {
            tablinks[i].classList.remove("active-link");
        }
    }
}
