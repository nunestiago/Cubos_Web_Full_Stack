const lista = [12, 18, 27];
const lista2 = [1, 2, 3];

function solucao(lista) {
  let maiores = [];
  let menores = [];
  for (const item of lista) {
    item < 18 ? menores.push(item) : maiores.push(item);
  }
  if (!maiores.length) {
    console.log('CRESCA E APARECA');
  } else {
    console.log(Math.min(...maiores));
  }
}

solucao(lista);
