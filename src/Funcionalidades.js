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
  let valordescuento=Descuento(res+valorimpuesto);
  const cantidadMostrar = Number.parseInt(cantidad.value);
  const precioMostrar = Number.parseInt(precio.value);


  div.innerHTML = "<p>" + cantidadMostrar + "<p>" + "<p>" + precioMostrar + "<p>"
  document.getElementById('descuento').innerHTML=valordescuento
  document.getElementById('impuesto').innerHTML = valorimpuesto;
  document.getElementById('precio').innerHTML=res;
  document.getElementById('total').innerHTML = res+valorimpuesto;
}); 

function ImpFORstate(valueState) 
{
  let valorImpuestos=0;
  //let res = precioTotal(cantidad.value, precio.value);
  switch (valueState) 
  {
    case 'CA':
        valorImpuestos = 4.00;
        break;
    case 'TX':
        valorImpuestos = 0.0625;
        break;
    case 'AL':
        valorImpuestos = 0.04;
        break;
    case 'NV':
        valorImpuestos = 0.08;
        break;
    case 'UT':
        valorImpuestos = 0.0665;
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

function Descuento(valorcompra)
{
    let valorDescuento=0;
    let res;
    if(valorcompra>7000)
    {
        valorDescuento=0.07;
    }else
    {
        if(valorcompra>3000)
        {
            valorDescuento=0.05;
        }else
        {
            if(valorcompra>1000)
            {
                valorDescuento=0.03
            }
        }
    }
    return valorDescuento;
}