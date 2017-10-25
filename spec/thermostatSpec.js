'use strict';

describe("thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("shows us the temperature", function() {
    expect(thermostat.viewTemp()).toEqual(20);
  });

});
