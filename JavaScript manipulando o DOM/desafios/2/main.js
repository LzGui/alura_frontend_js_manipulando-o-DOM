const clique = document.querySelector('#calcular')

clique.addEventListener('click', () => {
    console.log('Fui Clicado!')
})

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})