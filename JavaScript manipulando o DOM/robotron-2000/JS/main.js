const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')

const controle = document.querySelectorAll('[data-controle]')

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (ev) => {
        manipulaDados(ev.target.dataset.controle, ev.target.parentNode)
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}