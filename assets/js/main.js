//var nome; //hoisting - içar.

// console.log(nome, "chamando a variável usando o var");

// var nome = "Avanade";

// const nome = "Avanade";

/**
 * Existem 7 tipos de erros em JavaScript
 * SyntaxError - Escreveu alguma coisa errado.
 * ReferenceError - Chamou alguém que não existe.
 * TypeErros - Erro de tipo é uma violação do JavaScript
 * EvalError - Evite o uso do comando eval, mas se ele for inválido
 * RangeError - Erro de intervalo, loop infinito, ou chamadas inúmeras de recursividade
 * URIErros - Erro referente a chamadas externas (URL)
 * InternalErros - Erro interno do JavaScript, falta de memória, processador
 */

escreve("Museu do Ipiranga");
// Essa é uma função nominal (criou e deu um nome). Ela funciona, como o var, porque também sofre hoisting.
function escreve(x) {
    console.log(x)
}

/** 
* Regra para trabalhar com funções: criá-la e depois chamá-la.
* Há 4 tipos de funções em JS
* Função nominal
* Expressão de função: o valor da variável é uma função. É a melhor forma de escreve uma função que precisa de um nome.
* Arrow function (no arquivo function.js)
* Função Anônima: precisa de um contexto, não pode ser criada solta. Ou ela é colocada como valor de variável ou como um parâmetro (função de retorno, callback)
*/

// função nominal
function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = "<i>" + novoTitulo + "<i>";
}
mudaTitulo("Vai Corinthians!");

// expressão de função //função anônima atribuída à constante
const mudaTitulo2 = function(target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
}
mudaTitulo2("h2", "Trocando subtítulo");

const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
}
setInterval(relogio, 1000);

const frases = [
    "Um banco para 20 milhões de pessoas",
    "C6 Bank, o seu banco",
    "Cartão de Crédito sem anuidade",
];

// mudaFrase("h1,frases, 4")
// "h1" - onde
// frases - array
// 4 - segundos

const mudaFrase = (target, frases, tempo) => {
    let total = 0
    setInterval(() => {
        document.querySelector(target).innerHTML =
            frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];
        console.log(total);
    }, tempo * 1000);
};

mudaFrase("h1", frases, 4);