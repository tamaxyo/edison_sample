var m = require('mraa');

function char(x) {
   return parseInt(x,  16); }

x = new m.I2c(0)
x.address(0x62)
x.writeReg(0,  0)
x.writeReg(1,  0)

var val = 255;
var step = 16;
var fn = function() {
  if(val == 0) {
    return
  }
  val -= step;
  x.writeReg(char('0x08'),  char('0xAA'))
  x.writeReg(char('0x04'),  val)
  x.writeReg(char('0x02'),  val)
};
fn();

