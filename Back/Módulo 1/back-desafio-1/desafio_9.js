let precos = [150, 50];
let precos2 = [100, 100, 100];
let precos3 = [200, 150, 50, 100];

function solucao(precos) {
  if (precos.length >= 3) {
    let arr = precos.sort((a, b) => a - b);
    let first = [arr[0] / 2, ...arr.slice(1)];
    console.log(first.reduce((a, b) => a + b));
  } else {
    console.log(precos.reduce((a, b) => a + b));
  }
}

solucao(precos);
