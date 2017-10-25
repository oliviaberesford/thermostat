'use strict';

describe("PowerSaving", function() {
  var powerSaving;

  beforeEach(function() {
    powerSaving = new PowerSaving();

  });

  it("powersaving mode switched on by default", function() {
    expect(powerSaving.status).toEqual(true);
  });

  it("can turn power saving mode off", function() {
    powerSaving.turnOff()
    expect(powerSaving.status).toEqual(false);
  });

  it("can turn power saving mode on", function() {
    powerSaving.turnOff()
    powerSaving.turnOn()
    expect(powerSaving.status).toEqual(true);
  });

});
