function Thermostat(temp = DEFAULT_TEMP) {
  this.temp = temp
  this.powerSaving = new PowerSaving;
};

const DEFAULT_TEMP = 20
const MIN_TEMP = 10
const MAX_TEMP = 32
const POWER_SAVING_MAX_TEMP = 25


Thermostat.prototype.viewTemp = function() {
  return this.temp;
};

Thermostat.prototype.incTemp = function(num) {
  if (this.powerSaving.status === true) {
    this._powerSaveIncTemp(num);
  } else {
    this._powerSaveOffIncTemp(num);
  }
};

Thermostat.prototype.decTemp = function(num) {
  if (this.temp - num < MIN_TEMP) {
    throw new Error("Cannot go below 10 degrees!!!");
  } else {
  this.temp -= num;
  }
};

Thermostat.prototype.reset = function() {
  this.temp = DEFAULT_TEMP
};

Thermostat.prototype.currentEnergyUse = function() {
  if (this.temp < 18) {
    return "low-usage"
  } else if (this.temp < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  }
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving.turnOff();
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving.turnOn();
};

Thermostat.prototype._powerSaveOffIncTemp = function(num) {
  if (this.temp + num >= MAX_TEMP) {
    throw new Error("Cannot exceed 32 degrees!!!");
  } else {
    this.temp += num;
  }
};

Thermostat.prototype._powerSaveIncTemp = function(num) {
  if (this.temp + num >= POWER_SAVING_MAX_TEMP) {
    throw new Error("Cannot exceed 25 degrees!!!");
  } else {
    this.temp += num;
  }
};
