var m = require('mraa');

buzzar = new m.Gpio(8);
buzzar.dir(m.DIR_OUT);
buzzar.write(1);
setTimeout(function(){
  buzzar.write(0);
}, 1000);

