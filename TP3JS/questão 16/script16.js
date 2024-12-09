function calcularRaizesQuadradas(numeros) {
    return numeros.map(numero => Math.sqrt(numero));
}

document.getElementById('calcularRaiz').addEventListener('click', function() {
    const numeros = [];
    
    for (let i = 0; i < 5; i++) {
        const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        if (!isNaN(numero) && numero >= 0) {
            numeros.push(numero);
        } else {
            alert("Por favor, insira um número que seja válido e que não seja negativo.");
            i--; 
        }
    }

    const raizesQuadradas = calcularRaizesQuadradas(numeros);
    
    document.getElementById('resultado').innerText = `As raízes quadradas são: ${raizesQuadradas.join(', ')}`;
});