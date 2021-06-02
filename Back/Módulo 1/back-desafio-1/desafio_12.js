function solucao(min, km) {
  // .5 p min
  // > 20min - .3 por min
  // .7 por km
  // > 10km - .5 por 5km
  const testMin = min - 20;
  const testKm = km - 10;

  let totalMin, totalKm;
  if (testMin > 0) {
    totalMin = 1000 + testMin * 30;
  } else {
    totalMin = min * 50;
  }
  if (testKm > 0) {
    totalKm = 700 + testKm * 50;
  } else {
    totalKm = km * 70;
  }
  console.log(totalKm + totalMin);
}

solucao(25, 11.5);
