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
    $("#power-saving-status").text(thermostat.POWER_SAVE_STATUS);
  });


  $("#powersaving-off").on('click', function () {
    thermostat.powerSaveModeOff();
    $("#power-saving-status").text(thermostat.POWER_SAVE_STATUS);
  });

  function updateTemp() {
    $('#temperature').text(thermostat.currentTemp()).animate({ marginTop: "80px" }, 1500 )
               .animate({ marginTop: "40px" }, 800 );

  }

});

// $('#temp-up').on('click', function() { // event listener
//   thermostat.increaseTemperature(); // update model
//   $('#temperature').text(thermostat.temperature); // update view
// })
