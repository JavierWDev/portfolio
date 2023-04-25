//Exports Necesarios para que funcione la app
import ProjectTemplate from "./projectTemplate.mjs";

document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp(){
    ProjectTemplate.leerProyectos();
}