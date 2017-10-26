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

Thermostat.prototype.incTemp = function() {
  if (this.powerSaving.status === true) {
    this._powerSaveIncTemp();
  } else {
    this._powerSaveOffIncTemp();
  }
};

Thermostat.prototype.decTemp = function() {
  if (this.temp < MIN_TEMP) {
    window.alert("Cannot go below 10 degrees!!!")
    throw new Error("Cannot go below 10 degrees!!!");
  } else {
    this.temp -= 1;
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

Thermostat.prototype._powerSaveOffIncTemp = function() {
  if (this.temp > MAX_TEMP) {
    window.alert("Cannot exceed 32 degrees!!!")
    throw new Error("Cannot exceed 32 degrees!!!");
  } else {
    this.temp += 1;
  }
};

Thermostat.prototype._powerSaveIncTemp = function() {
  if (this.temp > POWER_SAVING_MAX_TEMP) {
    window.alert("Cannot exceed 25 degrees!!!")
    throw new Error("Cannot exceed 25 degrees!!!");
  } else {
    this.temp += 1;
  }
};
