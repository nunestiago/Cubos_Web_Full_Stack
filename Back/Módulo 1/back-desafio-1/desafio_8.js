let arr = [2, 2, 2, 2, 2];
let arr2 = [1, 3, 2, 1];

function solucao(numeros) {
  let soma = numeros.reduce((a, b) => a + b);
  let rodada = soma % numeros.length;
  if (rodada === 0) {
    console.log(numeros.length);
  } else {
    console.log(rodada);
  }
}

solucao(arr);
