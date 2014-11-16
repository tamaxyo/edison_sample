var b = require('bleacon');
var uuid = "e2c56db5dffb48d2b060d0f5a71096e0";
var major = 0;
var minor = 0;
var power = -59;

var m = require('mraa');
var d = new m.Gpio(8);
d.dir(m.DIR_OUT);

var advertising = false;

var advertise = function() {
  b.stopAdvertising();
  b.startAdvertising(uuid, major, minor, power);
}

var fn = function() {
  var danger = d.read();
  if(danger == 1 && !advertising) {
    major = 1;
    advertise = true;
    advertise();
  } else if(danger == 0 && advertising) {
    major = 0;
    advertise = false;
    advertise();
  }
  setTimeout(fn, 100);
}

