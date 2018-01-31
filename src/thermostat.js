function Thermostat() {
  this.TEMPERATURE = 20;
  this.MAX_TEMP = 32;
  this.MIN_TEMP = 10;
  this.LOW_USAGE_LIMIT = 18;
  this.MEDIUM_USAGE_LIMIT = 25;
  this.powerSave(true);
}

Thermostat.prototype.currentTemp = function () {
  return this.TEMPERATURE;
};

Thermostat.prototype.up = function () {

  if (this.MAX_TEMP === this.TEMPERATURE) {
    return;
  }

  this.TEMPERATURE += 1;
};

Thermostat.prototype.down = function () {

  if (this.MIN_TEMP === this.TEMPERATURE) {
    return;
  }
  this.TEMPERATURE -= 1;
};


Thermostat.prototype.powerSave = function (boolean) {

  if (boolean === true) {
    this.MAX_TEMP = 25;
  } else {
    this.MAX_TEMP = 32;
  }
};

Thermostat.prototype.reset = function () {
  this.TEMPERATURE = 20;
};

Thermostat.prototype.currentEnergyUsage = function () {

  if (this.TEMPERATURE < this.LOW_USAGE_LIMIT) {
    return 'GREEN';

  } else if (this.TEMPERATURE < this.MEDIUM_USAGE_LIMIT) {
    return 'BLACK';

  } else {
    return 'RED';
  }

};
