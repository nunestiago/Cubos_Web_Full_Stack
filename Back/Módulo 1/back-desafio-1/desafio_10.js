function solucao(a, b) {
  let arr = [a, b];
  a = Math.min(...arr);
  b = Math.max(...arr);
  let min = a;
  let max = b;
  let resto;
  while (resto !== 0) {
    resto = max % min; //?
    max = min; //?
    min = resto; //?
  }
  console.log((a * b) / max);

  let contador = 1;
  while (contador % a !== 0 || contador % b !== 0) {
    contador++;
  }
}

solucao(18, 30);

// if (b % a != 0) {
//   console.log((b * a) / resto);
// } else {
//   console.log(b);
// }
