export default function asingObserver(){
    //Obtengo el contenedor de proyectos
    const projectElements = document.querySelectorAll(".project--home");

    //Creo mi objeto de configuracion el cual agregará el observer a los elementos que sean visibles un 25%
    const observerConfig = {
        threshold : .50
    }
   
    //Creo el observador
    const observer = new IntersectionObserver( (entries) => {
        entries.forEach( entry => {
            if(entry.isIntersecting){
                const $element = entry.target;
                if(!$element.classList.contains("project--animation")){
                    $element.classList.add("project--animation");
                }
            }
        })
    }, observerConfig );
    
    projectElements.forEach( project => {
        observer.observe(project);
    });
}