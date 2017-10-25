'use strict';

describe("PowerSaving", function() {
  var powerSaving;

  beforeEach(function() {
    powerSaving = new PowerSaving();

  });

  it("powersaving mode switched on by default", function(){
    expect(powerSaving.status).toEqual(true);
  });
});
