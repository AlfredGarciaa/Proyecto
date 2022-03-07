const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado=document.querySelector("#estado-input");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => 
{
  event.preventDefault();

  let res= precioTotal(cantidad.value,precio.value);
  let valorimpuesto = ImpFORstate(estado.value);
  const cantidadMostrar = Number.parseInt(cantidad.value);
  const precioMostrar = Number.parseInt(precio.value);


  div.innerHTML = "<p>" + cantidadMostrar + "<p>" + "<p>" + precioMostrar + "<p>"
  document.getElementById('impuesto').innerHTML = valorimpuesto;
  document.getElementById('precio').innerHTML=res
}); 

function ImpFORstate(valueState) 
{
  let valorImpuestos=0;
  //let res = precioTotal(cantidad.value, precio.value);
  switch (valueState) 
  {
      case 'UT':
          valorImpuestos = 6.65;
          break;
      case 'NV':
          valorImpuestos = 8.00;
          break;
      case 'TX':
          valorImpuestos = 6.25;
          break;
      case 'AL':
          valorImpuestos = 4.00;
          break;
      case 'CA':
          valorImpuestos = 8.25;
          break;
      default:
          alert("No existe");
  }
  return valorImpuestos;
}

function precioTotal(cantidad,precio)
{
    let res=cantidad*precio;
    return res;
}