function fatorial(n) {
    if (n < 0) {
        return "Fatorial não vai ser definido para números que forem negativos.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

document.getElementById('calcularFatorial').addEventListener('click', function() {
    const numero = parseInt(prompt("Digite um número para realizar o calculo do fatorial:"));
    const resultado = fatorial(numero);
    document.getElementById('resultado').innerText = `O fatorial de ${numero} é: ${resultado}`;
});