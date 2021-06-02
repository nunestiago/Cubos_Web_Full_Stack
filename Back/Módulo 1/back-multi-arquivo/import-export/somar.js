function calculaSoma(lista) {
  let soma = 0;
  for (const item of lista) {
    soma += item;
  }
  return soma;
}

module.exports = { calculaSoma, outroValor: 'oi' };
