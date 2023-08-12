const numeroSorteado = 8
   
const numeroDigitado = document.getElementById('numeroDigitado')
numeroDigitado.focus()
const paragrafoResposta = document.getElementById('resposta')
const buttonChutar = document.getElementById('chutar')
const buttonReload = document.getElementById('reload')
const botaoSortear = document.getElementById('sortear')
// botaoSortear.addEventListener('click', () => {

// })

function digitaNumero() {
    numeroDigitado.focus()
    numeroDigitado.value = ''
}

buttonReload.addEventListener('click', () => {
    location.reload()
})

let numeroTentativas = 0
buttonChutar.addEventListener('click', () => {


    const numeroDigitadoNumber = Number(numeroDigitado.value)
    if (numeroDigitadoNumber < 0 || numeroDigitadoNumber > 10 || (numeroDigitado.value == '')) {
        paragrafoResposta.innerText = "Valor inválido! Digite um número entre 0 e 10."
        numeroDigitado.value = ""
        numeroDigitado.focus()
    } else if (numeroTentativas < 2) {
        if (numeroDigitadoNumber === numeroSorteado) {
            paragrafoResposta.innerText = "Meus parabéns. Você acertou!!! O número era " + numeroSorteado +'!!!'
            numeroDigitado.value = ''
            numeroTentativas == 3
           
        } else {
            
            paragrafoResposta.innerText = 'ERROU'
            digitaNumero()
        }
        
        numeroTentativas++
       
    } else {
        paragrafoResposta.innerText = 'Você errou!!! O número era ' + numeroSorteado +"!!!"
        
    }
    paragrafoResposta.innerHTML += `<p>Tentativas: ${numeroTentativas}</p>`
})
