describe ('Thermostat', function () {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe('Thermostat Temperature', function () {
    it('Starts at 20 degrees', function () {
      expect(thermostat.temperature).toEqual(20);
    });

    it('Increases temp when calling up function', function () {
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it('Decreases temp when calling down function', function () {
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it('Minimum temperature is 10 degrees - tested down by 15 degrees', function () {
      thermostat.down(15);
      expect(thermostat.temperature).toEqual(10);
    });

    it('Minimum temperature is 10 degrees - tested down by 25 degrees', function () {
      thermostat.down(25);
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('Thermostat Temperature -- Power Saving Mode', function () {
    it('When on the max temp is 25 degrees - tested up by 10 degrees', function () {
      thermostat.powerSave(true);
      thermostat.up(10);
      expect(thermostat.temperature).toEqual(25);
    });

    it('When off the max temp is 32 degrees - tested up by 12 degrees', function () {
      thermostat.up(12);
      expect(thermostat.temperature).toEqual(32);
    });
  });
});
