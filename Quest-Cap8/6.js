const math = require('mathjs');

function calcularLogaritmo() {
    const prompt = require('prompt-sync')();
    const numero = parseFloat(prompt('Digite um número para calcular o logaritmo: '));
    
    if (isNaN(numero) || numero <= 0) {
        console.log('Por favor, insira um número válido maior que zero.');
        return;
    }

    const logBase10 = math.log10(numero).toFixed(3); 
    const logBaseNatural = math.log(numero).toFixed(3); 

    console.log(`Logaritmo base 10 de ${numero}: ${logBase10}`);
    console.log(`Logaritmo base natural (ln) de ${numero}: ${logBaseNatural}`);
}

calcularLogaritmo();
