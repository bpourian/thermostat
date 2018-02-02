$(document).ready (function () {
  var thermostat = new Thermostat();
  getLocation();
  updateTemp();



  $("#temperature-up").on('click', function () {
    thermostat.up();
    $("#temperature").text(updateTemp());
  });

  $("#temperature-down").on('click', function () {
    thermostat.down();
    $("#temperature").text(updateTemp());
  });

  $("#temperature-reset").on('click', function () {
    thermostat.reset();
    $("#temperature").text(updateTemp());
  });

  $("#powersaving-on").on('click', function () {
    thermostat.powerSaveModeOn();
    $("#power-saving-status").text(thermostat.POWER_SAVE_STATUS);
  });


  $("#powersaving-off").on('click', function () {
    thermostat.powerSaveModeOff();
    $("#power-saving-status").text(thermostat.POWER_SAVE_STATUS);
  });


  function updateTemp() {
    $('#temperature').text(thermostat.currentTemp());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
    }

  function weather_geo(lats, lons){
    $ .get('http://api.openweathermap.org/data/2.5/weather?lat='+lats+'&lon='+lons+'&appid=c252e58bddeae127ff371336100e5aa9&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
      });
      }

  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  }


  function geoPosition(position) {
      if (position.coords.latitude != '') {
      $ .get('http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=c252e58bddeae127ff371336100e5aa9&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
        });

    }
  }

  });
