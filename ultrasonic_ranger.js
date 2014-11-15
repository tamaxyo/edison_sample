console.log("start")

var m = require('mraa');

var pwm5 = new m.Pwm(5, -1, false);
pwm5.enable(true);

pwm5.period_us(2000);

var cnt = 0;
var print = function() {
  if(cnt == 10) {
    return
  }
  cnt++;
  console.log(x.read());
  setTimeout(print, 1000);
}

print();
