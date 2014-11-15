console.log("start")

var m = require('mraa');

var x = new m.Gpio(5);
x.dir(m.DIR_IN);

var cnt = 0;
var print = function() {
  if(cnt == 10) {
    return
  }
  cnt++;
  console.log(x.read());
  setTimeout(print, 1000);
}


