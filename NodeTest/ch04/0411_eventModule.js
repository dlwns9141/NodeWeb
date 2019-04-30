var Calc = require('./0411_calc');
var calc = new Calc();
calc.emit('stop');
console.log(Calc.title + '에 이벤트 전달함');
