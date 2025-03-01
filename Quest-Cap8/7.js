const readline = require("readline");

// Configuração do readline para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para converter dias em minutos
function converterDiasParaMinutos(dias) {
    return dias * 24 * 60; // 1 dia = 24 horas, 1 hora = 60 minutos
}

// Função para converter gigabytes em bytes
function converterGigabytesParaBytes(gigabytes) {
    return gigabytes * 1024 * 1024 * 1024; // 1 GB = 1024^3 Bytes
}

// Programa principal
function executarConversoes() {
    rl.question("Digite a quantidade de dias para converter em minutos: ", (diasInput) => {
        const dias = parseFloat(diasInput);

        if (isNaN(dias) || dias < 0) {
            console.log("Por favor, insira um valor válido de dias.");
        } else {
            const minutos = converterDiasParaMinutos(dias);
            console.log(`${dias} dias equivalem a ${minutos} minutos.`);
        }

        rl.question("Digite a quantidade de gigabytes para converter em bytes: ", (gigabytesInput) => {
            const gigabytes = parseFloat(gigabytesInput);

            if (isNaN(gigabytes) || gigabytes < 0) {
                console.log("Por favor, insira um valor válido de gigabytes.");
            } else {
                const bytes = converterGigabytesParaBytes(gigabytes);
                console.log(`${gigabytes} gigabytes equivalem a ${bytes} bytes.`);
            }

            rl.close(); // Finaliza o programa
        });
    });
}

// Executar o programa
executarConversoes();
