const { format, parse } = require('date-fns');

const date = new Date(2021, 4, 12);
console.log(format(date, 'dd-MMM-yyyy'));
console.log(format(date, 'dd/MMM/yyyy'));
console.log(format(date, "dd 'de' MMM 'de' yyyy"));

const result = parse('11/02/2014', 'dd/MM/yyyy', new Date());
console.log(result);
