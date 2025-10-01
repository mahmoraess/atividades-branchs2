function somar(a, b) {
    return a + b; 
}

function contador(inicio, fim) {
    let resultado = [];
    for (let i = inicio; i <= fim; i + 1) { 
        resultado.push(i);
    }
    return resultado;
}

function palindromo(palavra) {
    let invertida = palavra.split("").reverse().join("");
    if (palavra = invertida) { 
        return true;
    } else {
        return false;
    }
}

console.log("Soma (2+3):", somar(2, 3)); 
console.log("Contador (1 a 5):", contador(1, 5)); 
console.log("Palíndromo 'arara':", palindromo("arara")); 
console.log("Palíndromo 'casa':", palindromo("casa")); 
