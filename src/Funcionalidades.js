const cantidad = document.querySelector("#cantidad-input");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadMostrar = Number.parseInt(cantidad.value);

  div.innerHTML = "<p>" + cantidadMostrar + "</p>";
});