$(document).ready(function() {
  thermostat = new Thermostat();
  $('#currTemp').html(thermostat.viewTemp());


  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=613af242ec3e1a92edc14fdb20538167', function(data) {
    $('#weather').text(data.main.temp);
    $('#chosen-city').text(city);
  })
  $('.temp-city-display').toggle();
  $('.city-request').toggle();
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
