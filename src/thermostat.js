function Thermostat() {
  this.temperature = 20;
  this.maxTemp = 32;
  this.minTemp = 10;
  this.powerSave(true);
}

Thermostat.prototype.up = function () {

  if (this.maxTemp === this.temperature) {
    return;
  }

  this.temperature += 1;
};

Thermostat.prototype.down = function () {

  if (this.minTemp === this.temperature) {
    return;
  }
  this.temperature -= 1;
};


Thermostat.prototype.powerSave = function (boolean) {

  if (boolean === true) {
    this.maxTemp = 25;
  } else {
    this.maxTemp = 32;
  }
};
