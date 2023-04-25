async function leerProyectos() {
    try {
        //Conexion al archivo de proyectos
        const proyectos = await fetch("../../proyectos.json")
            .then(conexion => conexion.json())
            .then(projects => projects.proyectos);

        //Imprimir proyectos en el HTML
        const fulfilled = imprimirHTML(proyectos);

    } catch (error) {
        console.error("No pude acceder a los proyectos...");
    }
}

function imprimirHTML(proyectos) {

    //Obtengo el template
    const $contenedorProyectos = document.querySelector(".projects__container");
    const $template = document.getElementById("template").content;
    const fragment = document.createDocumentFragment();

    proyectos.forEach(proyecto => {

        //Agregando la imagen del proyecto
        $template.querySelector(".project__ss img").setAttribute("src", proyecto.imagen_proyecto);
        $template.querySelector(".project__ss img").setAttribute("alt", "Captura de " + proyecto.imagen_proyecto);

        $template.querySelector(".project__technologies").innerHTML = "";
        imprimirTecnologia(proyecto.tecnologias, $template);

        // //Agregando el titulo del proyecto
        $template.querySelector(".project__title h3").textContent = proyecto.nombre_proyecto;

        //Overlay del Proyecto
        $template.querySelector(".project__overlay--head h3").textContent = proyecto.nombre_proyecto;
        $template.querySelector(".project__status").textContent = proyecto.estado_proyecto;
        $template.querySelector(".project__abstract").textContent = proyecto.abstracto_proyecto;
        $template.querySelector(".bg--wp").href = proyecto.link;
        $template.querySelector(".bg--gh").href = proyecto.github;

        let $clone = document.importNode($template, true);
        fragment.appendChild($clone);
    });

    $contenedorProyectos.appendChild(fragment);

    return true;
}

function imprimirTecnologia(tecnologia, $template) {

    const $container__tecnologias = $template.querySelector(".project__technologies");
    const fragment = document.createDocumentFragment();

    tecnologia.forEach(technology => {
        const tech = document.createElement("p");
        tech.textContent = technology;
        tech.classList.add(technology);
        fragment.appendChild(tech);
    });

    $container__tecnologias.appendChild(fragment);

}

const ProjectTemplate = {
    leerProyectos
}

export default ProjectTemplate;