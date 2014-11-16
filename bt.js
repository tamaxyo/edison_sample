var b = require('bleacon');
var uuid = "e2c56db5dffb48d2b060d0f5a71096e0";
var major = 0;
var minor = 0;
var power = -59;
var advertising = false;

var m = require('mraa');
var d = new m.Gpio(8);
d.dir(m.DIR_OUT);

var advertise = function() {
  b.stopAdvertising();
  b.startAdvertising(uuid, major, minor, power);
}

var fn = function() {
  var danger = d.read();
  console.log("danger: ", danger);
  if(danger != 0 && !advertising) {
    console.log("danger!");
    major = 1;
    advertise = true;
    advertise();
  } else if(danger == 0 && advertising) {
    console.log("become safe");
    major = 0;
    advertising = false;
    advertise();
  }
  setTimeout(fn, 100);
}

advertise();
fn();
