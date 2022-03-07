const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadMostrar = Number.parseInt(cantidad.value);
  const precioMostrar = Number.parseInt(precio.value);

  div.innerHTML = "<p>" + cantidadMostrar + "<p>" + "\n" + "<p>" + precioMostrar + "</p>";
}); 