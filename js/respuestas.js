// variables socio
const retoma = document.getElementById('retoma');
const retomaX = document.getElementById('retomaX');
const reapr = document.getElementById('reapr');
const reaprX = document.getElementById('reaprX');
const domicilio = document.getElementById('domicilio');
const telefono = document.getElementById('telefono');
const docs = document.getElementById('docs');
const agenda = document.getElementById('agenda');
const reaprDos = document.getElementById('reaprDos');
const reqX = document.getElementById('reqX');
//variables lider
const retomaLD = document.getElementById('retomaLD');
const retomaXLD = document.getElementById('retomaXLD');
const reaprLD = document.getElementById('reaprLD');
const reaprXLD = document.getElementById('reaprXLD');
const domicilioLD = document.getElementById('domicilioLD');
const telefonoLD = document.getElementById('telefonoLD');
const docsLD = document.getElementById('docsLD');
const agendaLD = document.getElementById('agendaLD');
const reaprDOSLD = document.getElementById('reaprDOSLD');
const redLD = document.getElementById('redLD');
const txt1 = " agradecemos nos contacte por este medio y ofrecemos una disculpa por el tiempo de espera, en respuesta a su solicitud de servicio le informamos que su requerimiento";
const txt2 = " agradecemos nos contacte por este medio y ofrecemos una disculpa por el tiempo de espera, en respuesta a su solicitud de servicio le informamos que";

let respuesta;
let socio;
let lider;
let buro;
let horAgendada;
let respFinal;

function validarCheckResp() {
    if (retoma.checked) {
        respuesta = 1;
    } else if (retomaX.checked) {
        respuesta = 2;
    } else if (reapr.checked) {
        respuesta = 3;
    } else if (reaprX.checked) {
        respuesta = 4;
    } else if (domicilio.checked) {
        respuesta = 5;
    } else if (telefono.checked) {
        respuesta = 6;
    } else if (docs.checked) {
        respuesta = 7
    } else if (agenda.checked) {
        respuesta = 8;
    } else if (reaprDos.checked) {
        respuesta = 9;
    } else if (reqX.checked) {
        respuesta = 10;
    } else if (retomaLD.checked) {
        respuesta = 11;
    } else if (retomaXLD.checked) {
        respuesta = 12;
    } else if (reaprLD.checked) {
        respuesta = 13;
    } else if (reaprXLD.checked) {
        respuesta = 14;
    } else if (domicilioLD.checked) {
        respuesta = 15;
    } else if (telefonoLD.checked) {
        respuesta = 16;
    } else if (docsLD.checked) {
        respuesta = 17
    } else if (agendaLD.checked) {
        respuesta = 18;
    } else if (reaprDOSLD.checked) {
        respuesta = 19;
    } else if (redLD.checked) {
        respuesta = 20;
    } else {
        alert("debes seleccionar una respuesta.")
    };
    scriptRespuestas();
}

function scriptRespuestas() {
    switch (respuesta) {
        case 1:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt1 + " fue procesado y su crédito se encuentra aprobado.";
            break;
        case 2:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt1 + " no pudo ser procesado ya que se le está generando una nueva llamada y no tenemos respuesta a nuestro llamado telefónico para la validación de datos.";
            break;
        case 3:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt1 + " fue procesado y la reapertura de su crédito se encuentra aprobada.";
            break;
        case 4:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            buro = prompt("Ingrese información del buro")
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt1 + " no procede por la siguiente información detallada. " + buro;
            break;
        case 5:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt2 + " se procede con la actualización de dirección según planilla de servicios adjunta.";
            break;
        case 6:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt2 + " el cambio de número telefónico fue procesado, pero no tenemos respuesta a las llamadas telefónicas que se les está generando para la respectiva validación de datos.";
            break;
        case 7:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt2 + " documento adjunto pasa al área respectiva para su verificación.";
            break;
        case 8:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            horAgendada = prompt("Ingrese la hora de llamada");
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt2 + " se procede con el agendamiento de llamada telefónica para la verificación de datos a las " + horAgendada + " del día de hoy.";
            break;
        case 9:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt1 + " si procede, pero se le está generando una llamada para la validación de datos y no tenemos respuesta a nuestro llamado.";
            break;
        case 10:
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + socio + txt1 + " no pudo ser procesado ya que xxxxxx";
            break;
        case 11:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt1 + " fue procesado y crédito del código " + socio + " se encuentra aprobado."
            break;
        case 12:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt1 + " no pudo ser procesado ya que se le está generando una nueva llamada al código " + socio + " y no tenemos respuesta a nuestro llamado telefónico para la validación de datos."
            break;
        case 13:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt1 + " fue procesado y la reapertura del crédito del código " + socio + " se encuentra aprobada."
            break;
        case 14:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            buro = prompt("Ingrese información del buro")
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt1 + " no procede por la siguiente información detallada. Titular código " + socio + " " + buro;
            break;
        case 15:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt2 + " se procede con la actualización de dirección domiciliaria del código " + socio + " según planilla de servicios básico adjunta."
            break;
        case 16:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt2 + " el cambio de número telefónico del código " + socio + " fue procesado, pero no tenemos respuesta a las llamadas telefónicas que se les está generando para la respectiva validación de datos."
            break;
        case 17:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt2 + " documento adjunto del código " + socio + " pasa al área respectiva para su verificación."
            break;
        case 18:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            horAgendada = prompt("Ingrese la hora de llamada");
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt2 + " se procede con el agendamiento de llamada telefónica para la verificación de datos del código " + socio + " a las " + horAgendada + " del día de hoy."
            break;
        case 19:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt2 + " la reapertura del código " + socio + " si procede, pero se le está generando una llamada para la verificación de datos y no tenemos respuesta a nuestro llamado."
            break;
        case 20:
            lider = mayuscula(prompt("Ingrese nombre o código del lider."));
            socio = mayuscula(prompt("Ingrese nombre o código del socio"));
            respFinal = mostrarFecha() + " Estimad@ " + lider + txt2 + " no puede ser procesado ya que al momento se verifica el análisis de red actualizado del código " + socio + " a la cual pertenece y la red mantiene los cupos elevados."
            break;
        default:
    };
    document.getElementById('respuestaFinal').innerHTML = respFinal;
}

// funcion para mostrar la fecha actual en el script
function mostrarFecha() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let agnio = fecha.getFullYear();
    // aumentamos el cero si el mes tiene un digito
    mes = ('0' + mes).slice(-2);
    let fechActual = `${dia}/${mes}/${agnio}`;
    return fechActual;
};
// con está función convertimos el primer caracter de una palabra a mayuscula 
function mayuscula(capsLock) {
    let name;
    name = capsLock.split(" ").map(letraMayus => {
        return letraMayus[0].toUpperCase() + letraMayus.slice(1).toLowerCase();
    });
    return name.join(" ");
};


function iniciarScript() {
    let botonResp = document.getElementById('respuesta');
    botonResp.addEventListener('click', validarCheckResp);
}


window.addEventListener('load', iniciarScript);