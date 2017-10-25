function Thermostat (temp = DEFAULT_TEMP) {
  this.temp = temp
};

const DEFAULT_TEMP = 20

Thermostat.prototype.viewTemp = function() {
  return this.temp;
};
