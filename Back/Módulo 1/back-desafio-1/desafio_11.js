const jogadores = [
  {
    nome: 'Herman',
    jogada: 1,
  },
  {
    nome: 'Rhodes',
    jogada: 1,
  },
  {
    nome: 'Beach',
    jogada: 1,
  },
  {
    nome: 'Laurel',
    jogada: 1,
  },
  {
    nome: 'Beatrice',
    jogada: 1,
  },
  {
    nome: 'Alison',
    jogada: 1,
  },
  {
    nome: 'Saundra',
    jogada: 1,
  },
  {
    nome: 'Klein',
    jogada: 0,
  },
];

function solucao(jogadores) {
  let soma = 0;
  for (let i = 0; i < jogadores.length; i++) {
    soma += jogadores[i].jogada;
  }

  if (soma === 1) {
    let result = jogadores.filter((jogadores) => jogadores.jogada === 1);
    return console.log(result[0].nome);
  } else if (soma === jogadores.length - 1) {
    let result = jogadores.filter((jogadores) => jogadores.jogada === 0);
    return console.log(result[0].nome);
  } else {
    return console.log('NINGUEM');
  }
}
solucao(jogadores);

//   for (let i = 0; i < jogadores.length; i++) {
//     console.log(jogadores[i].jogada);
//     for (let j = i + 1; j < jogadores.length; j++) {
//       if (jogadores[i].jogada != jogadores[j].jogada) {
//         console.log(jogadores[i].nome);
//       } else {
//         console.log('NINGUEM');
//       }
//     }
//   }
