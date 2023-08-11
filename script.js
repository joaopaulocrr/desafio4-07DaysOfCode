const numeroSorteado = 8
   
const numeroDigitado = document.getElementById('numeroDigitado')
numeroDigitado.focus()
const buttonChutar = document.getElementById('chutar')

const botaoSortear = document.getElementById('sortear')
// botaoSortear.addEventListener('click', () => {

// })

function digitaNumero() {
    numeroDigitado.focus()
    numeroDigitado.value = ''
}

let numeroTentativas = 0
buttonChutar.addEventListener('click', () => {


    const numeroDigitadoNumber = Number(numeroDigitado.value)
    if (numeroDigitadoNumber < 0 || numeroDigitadoNumber > 10) {
        console.log("Valor inválido! Digite um número entre 0 e 10.")
        numeroDigitado.value = ""
        numeroDigitado.focus()
    } else if (numeroTentativas < 2) {
        if (numeroDigitadoNumber === numeroSorteado) {
            console.log("Meus parabéns. Você acertou!!! O número era", + numeroSorteado)
            numeroDigitado.value = ''
           
        } else {
            console.log('ERROU')
            digitaNumero()
        }
        
        numeroTentativas++
        console.log(numeroTentativas)
    } else {
        console.log('Você errou!!! O número era ' + numeroSorteado)
        

    }
})
