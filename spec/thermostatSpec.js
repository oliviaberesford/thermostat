'use strict';

describe("thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("shows us the temperature", function() {
    thermostat = new Thermostat(16);
    expect(thermostat.viewTemp()).toEqual(16);
  });

  it("has a default temperature of 20", function() {
    expect(thermostat.viewTemp()).toEqual(20);
  });

  it("can increase the temperature", function(){
    thermostat._incTemp(3);
    expect(thermostat.viewTemp()).toEqual(23);
  });

  it("can decrease the temperature", function(){
    thermostat._decTemp(3);
    expect(thermostat.viewTemp()).toEqual(17);
  });

  it("resets the temperature to default", function() {
    thermostat = new Thermostat(16);
    thermostat._reset()
    expect(thermostat.viewTemp()).toEqual(20);
  });

});
