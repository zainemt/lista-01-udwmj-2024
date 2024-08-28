function changeColor(value) {
    switch (value){
        case "b1":
            document.body.setAttribute('id', 'body-color1')
            break;
        case "b2":
            document.body.setAttribute('id', 'body-color2')
            break;
        case 'b3':
            document.body.setAttribute('id', 'body-color3')
            break;
        case 'b4':
            document.body.setAttribute('id', 'body-color4')
            break;
        default:;
    }
}

let display = document.getElementById('display')

function displayView(valor) {
    display.value += valor
}

function displayReset() {
    display.value = ''
}

function calcResult() {
    let result
    if (eval(display.value) == Number.POSITIVE_INFINITY) {
        result = 'Erro - divisão por zero'
    } else {
        result = eval(display.value)
    }
    saveCalc(display.value, result)
    displayReset()
    displayView(result)
}

    var contador = 0

function saveCalc(conta, result) {
    let elemento = document.getElementById('memory')
    
    if (contador == 0) {
        let campo = document.getElementById('memory')
        campo.value = (`${conta} = ${result}`) 
    } else {
        let campo = document.getElementById('memoriaCalculo').lastChild
        campo.value = (`${conta} = ${result}`)
    }
    
    let clone = elemento.cloneNode(true)
    clone.value = ''
    document.getElementById('memoriaCalculo').appendChild(clone)
    
    contador++
}