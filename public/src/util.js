$(document).ready(function() {
  thermostat = new Thermostat();

  console.log(localStorage);

  if (localStorage.getItem('thermoStorage') !== null) {
    currentJsonTemp();
  };

  $('#currTemp').html(thermostat.viewTemp());


  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=613af242ec3e1a92edc14fdb20538167', function(data) {
      $('#weather').text(data.main.temp);
      $('#chosen-city').text(city);
    })
    if (localStorage.getItem('thermoStorage2') !== null) {
      // still not working, to be addressed
      currentJsonWeather();
      $('.temp-city-display').toggle();
    } else {
      $('.city-request').toggle();
      var cookie2 = {
        weather: city
      };
      localStorage.setItem('thermoStorage2', JSON.stringify(cookie2))
    };
  });

  $("#reset_button").click(function() {
    thermostat.reset()
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#temp_increase').click(function() {
    thermostat.incTemp()
    $('#energy_usage').html(thermostat.currentEnergyUse());
    refreshCookie();
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#temp_decrease').click(function() {
    thermostat.decTemp()
    $('#energy_usage').html(thermostat.currentEnergyUse());
    refreshCookie();
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#PSM_on').click(function() {
    thermostat.powerSavingOn()
    refreshCookie();
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#PSM_off').click(function() {
    thermostat.powerSavingOff()
    refreshCookie();
    $('#currTemp').html(thermostat.viewTemp());
  });

  $('#energy_usage').html(thermostat.currentEnergyUse());

  function refreshCookie() {
    var cookie = {
      temperature: thermostat.viewTemp(),
      powersaving: thermostat.powerSaving.status
    }
    localStorage.setItem('thermoStorage', JSON.stringify(cookie));
  };


  function currentJsonTemp() {
    thermostat.temp = JSON.parse(localStorage.getItem('thermoStorage')).temperature;
  };

  function currentJsonWeather() {
    city = JSON.parse(localStorage.getItem('thermoStorage2')).weather;
  };
});
