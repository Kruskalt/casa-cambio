import {Moneda} from "../src/clases/moneda.js";

const $botonConfirmar= document.querySelector("#confirmar")


$botonConfirmar.onclick= (e)=>{
    console.log("click")
    const $menuDesplegable= document.querySelector("#menu-desplegable")
    const $inputFecha = document.querySelector("#fecha")
    const monedaSeleccionada= $menuDesplegable.value

 
    const esExito= validarFormulario()
    //mostrarMensajeCargando()

    if (esExito) {
      pedirTiposDeCambio($inputFecha.value,monedaSeleccionada)
      $inputFecha.style.border=""
    }
   
    

    e.preventDefault()


}

// function mostrarMensajeCargando() {
//   const $mensajeCargando= document.querySelector("#cargando")
//   if (document.querySelectorAll("li").length != 0) {
//     $mensajeCargando.style.visibility="hidden"
//   }else{
//     $mensajeCargando.style.visibility="visible"
//   }
  
// }



async function pedirTiposDeCambio(fecha,moneda) {
   
    fetch(`https://api.frankfurter.app/${fecha}?from=${moneda}`)
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {
    
    $("#fecha-base-cartel").text(
        `Cambios del día ${respuestaJSON.date} en base ${respuestaJSON.base}`
    );

    $("#lista").html('');
      
    Object.keys(respuestaJSON.rates).forEach(async moneda => {
      
      const monedaObj= await new Moneda(moneda,respuestaJSON.rates[moneda])

      $("#lista").append($(`
      
      <li >  <div class="card text-bg-light mb-3"  style="max-width: 18rem; ">
      <div class="card-header">${await monedaObj.getNombre()}:</div>
      <div class="card-body">
        <h5 class="card-title">${await monedaObj.getValor()}</h5>
        <p class="card-text"></p>
      </div>
    </div>
      </li>
      `));
    });
  })
  .catch(error => console.error("FALLÓ", error));

  
}











