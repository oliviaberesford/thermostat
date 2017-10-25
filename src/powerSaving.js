function PowerSaving(status = DEFAULT_STATUS) {
  this.status = status;
};

const DEFAULT_STATUS = true


PowerSaving.prototype.turnOff = function() {
  this.status = false;
};

PowerSaving.prototype.turnOn = function() {
  this.status = true;
};
