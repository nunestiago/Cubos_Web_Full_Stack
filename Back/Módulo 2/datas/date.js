//Data vs Momento
const now = new Date(); //imprime o momento 2021-05-24 às 18:00, 18:00 é geral, 18:00 no BR é 21:00 em Londres
console.log(now); //Por padrão o Node exibe em UTC - Greenwitch
//TEM que ter o new, sem o new é só um String do momento atual
const date = new Date(2020, 0, 1, 0, 0, 0, 0); //os meses na classe Date é um array, Jan é 0, mas dias começam em 1.
//imprime 2020-01-01T03:00:00.000Z . a hora é 0, mas o JS converte pra greenwitch
console.log(date);

const copa = new Date(2002, 5, 30, 8);
// console.log(copa);

//Timestamp
const timestamp = +copa + 1000 * 60 * 60; // copa.getTime() . para adicionar algo ao timestamp se soma em milissegundos (somado uma hora no caso)
const maisUmaHora = new Date(timestamp);
//Data a partir do timestamp
console.log(maisUmaHora);

//Forma RUIM de criar Data
const badData = new Date('2021-05-23T22:05:49.021Z');
console.log(badData);
//Pq não fazer isso? Pq nem todo navegador dá suporte

//Comparação entre datas
const ontem = new Date('2021-05-23T22:05:49.021Z');
const ontem2 = new Date('2021-05-23T22:05:49.021Z');
console.log(+ontem === +ontem2); //comparação sempre tem que ser com timestamp, ou dá false pq o js compara o local na memória e não a data mesmo. Só compara a data se for timestamp

//Métodos
const hoje = new Date();
hoje.setDate(hoje.getDate - 7); //subtrai 7 dias, pode passar o mês
hoje.setMonth(11);
hoje.getDay(); //baste por get e set na frente

// Formatação de data, ver no navegador
const agora = new Date();
console.log(agora.toLocaleString('pt-BR'));
console.log(
  agora.toLocaleString(undefined, {
    // https://devdocs.io/javascript/global_objects/date/tolocalestring#Parameters
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);
