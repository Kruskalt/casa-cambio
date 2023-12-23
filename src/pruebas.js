function probarValidarFecha() {
    console.assert(validarFecha("")==="No seleccionaste una fecha",
    "ValidarFecha no valida que la fecha sea vacio");

    console.assert(validarFecha("2023/12/01")==="",
    "Deberia aceptar este tipo de formato");

    console.assert(validarFecha("1998/12/01")==="Solo se pueden hacer consultas a partir del año 2000",
   "Deberia devolver un error cuando ponemos fechas anteriores al año 2000");
}

probarValidarFecha()


