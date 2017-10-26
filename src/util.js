$(document).ready(function() {
  thermostat = new Thermostat();
  $('#currTemp').html(thermostat.viewTemp());


  $("#reset_button").click(function() {
    thermostat.reset()
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#temp_increase').click(function() {
    thermostat.incTemp()
    $('#energy_usage').html(thermostat.currentEnergyUse());
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#temp_decrease').click(function() {
    thermostat.decTemp()
    $('#energy_usage').html(thermostat.currentEnergyUse());
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#PSM_on').click(function() {
    thermostat.powerSavingOn()
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#PSM_off').click(function() {
    thermostat.powerSavingOff()
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#energy_usage').html(thermostat.currentEnergyUse());

});
