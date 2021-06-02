let texto =
  'Cuidado,  pois usuarios as vezes deixam espacos vazios no fim do texto sem querer. . . ,    , .';

function solucao(texto) {
  let str = texto.trim();
  let splitted = str.split(' ');
  splitted.filter((n) => n);

  console.log(splitted);
}
solucao(texto);

// console.log(
//   str.split(' ').filter(function (n) {
//     return n != '' && n != '.' && n != ',';    }).length
// );
