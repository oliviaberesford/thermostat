function Thermostat (temp = DEFAULT_TEMP) {
  this.temp = temp
  // this.powerSaving = new PowerSaving;
};

const DEFAULT_TEMP = 20


Thermostat.prototype.viewTemp = function() {
  return this.temp;
};

// Thermostat.prototype.viewPowerSaving = function() {
//   return this.temp;
// };

Thermostat.prototype.incTemp = function(num) {
  this.temp += num;
};

Thermostat.prototype.decTemp = function(num) {
  this.temp -= num;
};

Thermostat.prototype.reset = function() {
  this.temp = DEFAULT_TEMP
};

Thermostat.prototype.currentEnergyUse = function() {
  if (this.temp < 18) { return "low-usage" }
  else if (this.temp < 25) { return "medium-usage" }
  else { return "high-usage" }
};
