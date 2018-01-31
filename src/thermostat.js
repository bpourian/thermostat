function Thermostat() {
  this.temperature = 20;
  this.maxTemp = 32;
  this.minTemp = 10;
}

Thermostat.prototype.up = function (number) {
  this._calculateMaxTemp(number);
};

Thermostat.prototype.down = function (number) {

  this._calculateMinTemp(number);
};


Thermostat.prototype._calculateMinTemp = function (number) {

  var temp = this.temperature - number;

  if (temp < this.minTemp) {
    this.temperature = this.minTemp;
  }else {
    this.temperature = temp;
  }
};

Thermostat.prototype._calculateMaxTemp = function (number) {

  var temp = this.temperature + number;

  if (temp > this.maxTemp) {
    this.temperature = this.maxTemp;
  }else {
    this.temperature = temp;
  }
};

Thermostat.prototype.powerSave = function (boolean) {

  if (boolean === true) {
    this.maxTemp = 25;
  } else {
    this.maxTemp = 32;
  }
};
