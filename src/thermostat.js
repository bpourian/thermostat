function Thermostat() {
  this.TEMPERATURE = 20;
  this.MAX_TEMP = 32;
  this.MIN_TEMP = 10;
  this.LOW_USAGE_LIMIT = 18;
  this.MEDIUM_USAGE_LIMIT = 25;
  this.POWER_SAVE_STATUS = 'on';
  this.powerSaveModeOn();
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

Thermostat.prototype.powerSaveModeOn = function () {
  this.POWER_SAVE_STATUS = 'on';
  this.MAX_TEMP = 25;
};

Thermostat.prototype.powerSaveModeOff = function () {
  this.POWER_SAVE_STATUS = 'off';
  this.MAX_TEMP = 32;
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
