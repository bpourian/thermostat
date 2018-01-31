describe ('Thermostat', function () {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });




  describe('Thermostat Temperature Controls', function () {
    it('Starts at 20 degrees', function () {
      expect(thermostat.currentTemp()).toEqual(20);
    });

    it('Increases temp when calling up function', function () {
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(21);
    });

    it('Decreases temp when calling down function', function () {
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(19);
    });

    it('Minimum temperature is 10 degrees - tested down by 15 degrees', function () {
      for (var i = 0; i < 15; i++) {
      thermostat.down();
      }
      expect(thermostat.currentTemp()).toEqual(10);
    });

    it('Minimum temperature is 10 degrees - tested down by 25 degrees', function () {
      for (var i = 0; i < 25; i++) {
      thermostat.down();
      }
      expect(thermostat.currentTemp()).toEqual(10);
    });
  });



  describe('Thermostat Power Saving Mode', function () {
    it('When on the max temp is 25 degrees - tested up by 10 degrees', function () {
      thermostat.powerSave(true);
      for (var i = 0; i < 10; i++) {
      thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });

    it('When off the max temp is 32 degrees - tested up by 12 degrees', function () {
      thermostat.powerSave(false);
      for (var i = 0; i < 12; i++) {
      thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(32);
    });
  });




  describe('Thermostat Reset option', function () {
    it('Reset current temperature to default of 20 degrees', function () {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.currentTemp()).toEqual(20);
    });
  });



  describe('Thermostat Current Energy Usage', function () {
    it('Low-Usage as temperature < 18 degrees', function () {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.currentEnergyUsage()).toContain('GREEN');
    });

    it('Low_Usage as temperature < 25 degrees', function () {
      expect(thermostat.currentEnergyUsage()).toContain('BLACK');
    });

    it('Low-Usage as temperature < 18 degrees', function () {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toContain('RED');
    });
  });
});
