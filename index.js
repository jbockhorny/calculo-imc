let calculaImc = (() => {

    let nome = document.getElementById('nome').value
    let altura = parseInt(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let resposta = document.getElementById('resposta')
    let imc = null
    let status = null

    if (nome == '' || altura == '' || peso == '') {
        alert('Por favor, informe o Nome a Altura e o Peso!')
        document.getElementById('nome').focus()
        return;
    }

    altura = altura / 100

    imc = Number(((peso / (altura * altura))).toFixed(1))

    if (imc <= 18.5) {
        status = 'Magreza'
    } else if (imc <= 24.9) {
        status = "Normal"
    } else if (imc <= 30) {
        status = 'Sobrepeso'
    } else {
        status = 'Obesidade'
    }
    resposta.textContent = `${nome}, seu IMC é ${imc} kg/m². Status: ${status}.`
})

let btnImc = document.getElementById('btn-imc')
btnImc.addEventListener('click', calculaImc)

let limparCampos = (() => {

    document.getElementById('nome').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('resposta').textContent = ''
    document.getElementById('nome').focus()
})

let btnRecomecar = document.getElementById('btn-limpar')
btnRecomecar.addEventListener('click', limparCampos)