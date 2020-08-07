console.log("Live Js")

// Desplege del menu en movile
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    console.log("despliegue ")
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}
