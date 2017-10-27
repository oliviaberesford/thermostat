$(document).ready(function() {
  thermostat = new Thermostat();
  $('#currTemp').html(thermostat.viewTemp());

  $.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=613af242ec3e1a92edc14fdb20538167', function(data){
    $('#weather').html(data.main.temp);
  });

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
