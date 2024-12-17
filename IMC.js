const opcoesField = document.getElementById('opcoes');
const pesoField = document.getElementById('peso');
const alturaField = document.getElementById('altura');
const submit = document.getElementById('submitBtn');
const reset = document.getElementById('resetBTn');
const resultadoDiv = document.getElementById('resultadoDiv');
let mensagem;



submit.addEventListener('click', (event) => {
    event.preventDefault();
    const peso = parseFloat(pesoField.value);
    const altura = parseFloat(alturaField.value);
    const opcoes = opcoesField.value;
    const result = peso / (altura * altura);


    switch (opcoes) {
        case "opcao1":
            if (result < 18.5) {
                mensagem = `Seu IMC é: ${result.toFixed(2)}, Você esta Abaixo do peso ideal`;
                resultadoDiv.style.color = "red";
            } else if (result >= 18.5 && result < 25) {
                mensagem = `Seu IMC é: ${result.toFixed(2)} Você esta no peso ideal`;
                resultadoDiv.style.color = "green";
            } else if (result >= 25 && result < 30) {
                mensagem = `Seu IMC é: ${result.toFixed(2)} Você esta acima do peso ideal`;
                resultadoDiv.style.color = "red";
            } else if (result >= 30 && result <= 40) {
                mensagem = `Seu IMC é: ${result.toFixed(2)} Você esta muito acima do peso ideal`;
                resultadoDiv.style.color = "red";
            }
            break;

        case "opcao2":
            if (result < 18.5) {
                mensagem = `Seu IMC é: ${result.toFixed(2)} Você esta Abaixo do peso ideal`;
                resultadoDiv.style.color = "red";
            } else if (result > 18.5 && result < 24.9) {
                mensagem = `Seu IMC é: ${result.toFixed(2)} Você esta no peso ideal`;
                resultadoDiv.style.color = "Green";
            } else if (result > 24.9 && result < 29.9) {
                mensagem = `Seu IMC é: ${result.toFixed(2)} Você esta acima do peso ideal`;
                resultadoDiv.style.color = "red";
            } else if (result > 29.9 && result < 34.9) {
                mensagem = `Seu IMC é: ${result.toFixed(2)} Você esta muito acima do peso ideal`;
                resultadoDiv.style.color = "red";
            }
            break;

        default:
            break;
    }

    resultadoDiv.textContent = mensagem;

});

reset.addEventListener('click', (event) => {
    event.Default();
    mensagem = ' ';
    resultadoDiv.textContent = mensagem;
   

});
