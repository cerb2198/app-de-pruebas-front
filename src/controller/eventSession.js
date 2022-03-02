
// LOS EVENTOS SIGUEN INTACTOS EMPEZAR A CONTAR EL TIEMPO DE SUSPENSIÓN POR INACTIVIDAD QUINCE MINUTOS,
// CANCELAR EL TIEMPO DE INACTIVIDAD SI HAY UN INCREMENTO EN LAS VARIABLES DE MONITOREO

const eventSession = (isMonitoring) => {

    // VARIABLES DE MONITOREO
    let identificador;

    identificador = setTimeout( ()=>{
        alert("Se cierra sesión..."); 
    }, 10000);


    function detenerConteo() {

        clearTimeout(identificador);

        identificador = setTimeout( ()=>{
            alert("Se cierra sesión...");
            //VENIR Y BORRAR DE LOCAL STORAGE EL ACCESO DEL USUARIO... 
        }, 10000);
    }

    if(isMonitoring){

        //INICIA EL CONTEO PARA CIERRE DE SESION

        // AÑADIMOS LOS EVENTOS A MONITOREAR
        document.addEventListener("click", () => {
            detenerConteo();
        });

        document.addEventListener("scroll", () => {
            detenerConteo();
        });

        document.addEventListener("keydown", () => {
            detenerConteo();
        });

    }
    
}


export default eventSession;


