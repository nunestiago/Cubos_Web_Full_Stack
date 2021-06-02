const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

function rodada() {
  for (let jogador of jogadores) {
    if (jogadores.indexOf(jogador) === jogadores.length - 1) {
      clearInterval(intervalId);
      console.log('A rodada terminou');
    }
    console.log(jogador);
  }
}

function rodada(test) {
  for (let jogador of jogadores) {
    if (jogadores.indexOf(jogador) === jogadores.length - 1) {
      clearInterval(intervalId);
      console.log('A rodada terminou');
    }
    console.log(jogador);
  }
}
const intervalId = setInterval(rodada, 2000);
