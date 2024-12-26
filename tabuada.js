const submit = document.getElementById('submit');
const resposta = document.getElementById('resposta');
const tabuadaField = document.getElementById('tabuada');

function CalculaTabuada(num) {
    let resultados = '';
    for (let i = 0; i <= 10; i++) {
        resultados += `${num} x ${i} = ${num * i}<br>`;
    }
    return resultados;
}


submit.addEventListener('click', (event) => {
    event.preventDefault();
    const valor = parseFloat(tabuadaField.value);

    resposta.innerHTML = CalculaTabuada(valor);
});