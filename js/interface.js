// window.onload = function() {
//      alert( "Thermostat created by Benjamin Pourian" );
//  };


$(document).ready (function () {
  var thermostat = new Thermostat();
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

  });


  $("#powersaving-off").on('click', function () {
    thermostat.powerSaveModeOff();
  });

  function updateTemp() {
    $('#temperature').text(thermostat.currentTemp());
  }

});

// $('#temp-up').on('click', function() { // event listener
//   thermostat.increaseTemperature(); // update model
//   $('#temperature').text(thermostat.temperature); // update view
// })
