//Exports Necesarios para que funcione la app
import asingObserver from "./projectObserver.mjs";
import ProjectTemplate from "./projectTemplate.mjs";

document.addEventListener("DOMContentLoaded", iniciarApp);

async function iniciarApp(){
    //Obtengo los proyectos de mi JSON
    await ProjectTemplate.leerProyectos();

    //Les asigno a los proyecto la animacion de fadein
    asingObserver();
    
}