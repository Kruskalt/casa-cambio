function validarFecha(fecha) {
    const AÑOADMITIDO=2000
    const añoSeleccionado= String(fecha).slice(0,4)

    if (fecha==="") {
        return "No seleccionaste una fecha"
    }else if (Number(añoSeleccionado)<AÑOADMITIDO) {
        return "Solo se pueden hacer consultas a partir del año 2000"
    }
    return ""
}



function validarFormulario() {
    const FechaSeleccionada=document.querySelector("#fecha").value


    const errorFecha = validarFecha(FechaSeleccionada)

    let errores = {}
    errores.fecha = errorFecha

    return  manejarErrores(errores) === 0


}

function manejarErrores(errores) {
    eliminarMensajesError()
    const keys = Object.keys(errores)


    const $errors = document.querySelector("#errores")

    let cantidadErrores = 0

    keys.forEach(function (key) {
        const error = errores[key]

        if (error) {
            $form[key].style.border = "2px solid red"
            const $error = document.createElement("li")

            $error.className="badge form-label"
            $error.style.backgroundColor="red"
            $error.style.margin="0px"
            $error.style.width="400px"
            $error.innerText = error
            $errors.appendChild($error)
            cantidadErrores++

        }
         
    })

    return cantidadErrores
}

function eliminarMensajesError(event) {
    const $errors = document.querySelector("#errores")
    while ($errors.firstChild) {
        $errors.removeChild($errors.firstChild)
    }

}

const $form = document.querySelector("form")