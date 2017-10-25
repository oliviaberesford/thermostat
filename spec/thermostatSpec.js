'use strict';

describe("thermostat", function() {
  var thermostat;
  var powerSaving;

  beforeEach(function() {
    thermostat = new Thermostat();
    powerSaving = {
      turnOff: function(value) {
        return value;
      }
    }
  });

  it("shows us the temperature", function() {
    thermostat = new Thermostat(16);
    expect(thermostat.viewTemp()).toEqual(16);
  });

  it("has a default temperature of 20", function() {
    expect(thermostat.viewTemp()).toEqual(20);
  });

  it("can increase the temperature", function() {
    thermostat.incTemp(3);
    expect(thermostat.viewTemp()).toEqual(23);
  });

  it("can decrease the temperature", function() {
    thermostat.decTemp(3);
    expect(thermostat.viewTemp()).toEqual(17);
  });

  it("resets the temperature to default", function() {
    thermostat = new Thermostat(16);
    thermostat.reset()
    expect(thermostat.viewTemp()).toEqual(20);
  });

  it("can show current low energy usage", function() {
    thermostat = new Thermostat(15);
    expect(thermostat.currentEnergyUse()).toEqual("low-usage")
  });

  it("can show current mid energy usage", function() {
    thermostat = new Thermostat(20);
    expect(thermostat.currentEnergyUse()).toEqual("medium-usage")
  });

  it("can show current high energy usage", function() {
    thermostat = new Thermostat(30);
    expect(thermostat.currentEnergyUse()).toEqual("high-usage")
  });

  it("if power saving is off max temperature is 32", function() {
    thermostat.powerSavingOff();
    expect(function() {
      thermostat.incTemp(15);
    }).toThrowError("Cannot exceed 32 degrees!!!");
  });

  it("if power saving is on max temperature is 25", function() {
    expect(function() {
      thermostat.incTemp(15);
    }).toThrowError("Cannot exceed 25 degrees!!!");
  });

  it("cannot go below the minimum temperature", function() {
    expect(function() {
      thermostat.decTemp(15);
    }).toThrowError("Cannot go below 10 degrees!!!");
  });

});
