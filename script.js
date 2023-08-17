let numeroSorteado = 0
   
const numeroDigitado = document.getElementById('numeroDigitado')
numeroDigitado.focus()
const paragrafoResposta = document.getElementById('resposta')
const buttonChutar = document.getElementById('chutar')
const buttonReload = document.getElementById('reload')
const botaoSortear = document.getElementById('sortear')
 botaoSortear.addEventListener('click', () => {
   numeroSorteado  = Math.floor(Math.random() * (10 - 0 + 1) + 0)
   console.log(numeroSorteado)
})

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
            paragrafoResposta.innerHTML = "<p> parabéns. Você acertou!!! O número era " + numeroSorteado +'!!!</p>'
            numeroDigitado.value = ''
            numeroTentativas == 3
           
        } else {
            
            paragrafoResposta.innerHTML = '<p>ERROU</p>'
            digitaNumero()
        }
        
        numeroTentativas++
       
    } else {
        paragrafoResposta.innerText = 'Você errou!!! O número era ' + numeroSorteado +"!!!"
        numeroTentativas++
    }
    paragrafoResposta.innerHTML += `<p>Tentativas: ${numeroTentativas }</p>`
})
