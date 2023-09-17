var nome = prompt("Digite seu nome:");

var idade = parseInt(prompt("Digite sua idade:"));

var estaAcompanhado = prompt("Você está acompanhado? (Digite 's' para sim ou 'n' para não):");

if (estaAcompanhado === 's') {
    estaAcompanhado = true;
} else {
    estaAcompanhado = false;
}

if (idade >= 18) {
    if (estaAcompanhado) {
        alert("Entrada permitida para " + nome + ": Conceder desconto");
    } else {
        alert("Entrada permitida para " + nome + ": Valor integral.");
    }
} else {
    alert("Entrada não está permitida para " + nome + ": Menor de idade.");
}




