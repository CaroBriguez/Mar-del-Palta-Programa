let amountOfBoludos = 0;
const result = document.querySelector('#result')
const btn = document.querySelector('#counter-btn')

const addOneBoludo = () => {
    amountOfBoludos++;
    let quote = `${amountOfBoludos}`;
    result.textContent = quote;
    var resultado = document.getElementById('result');
    resultado.style.setProperty("background-color","#000000");
    resultado.style.setProperty("color","#ffffff");
    resultado.style.setProperty("width","30px");
    resultado.style.setProperty("height","30px");
    resultado.style.setProperty("border-radius","100%");
    resultado.style.setProperty("text-align","center");
}

btn.onclick = addOneBoludo;
