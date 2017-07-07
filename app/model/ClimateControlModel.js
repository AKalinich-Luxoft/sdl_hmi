SDL.ClimateControlModel = Em.Object.create({

  init: function() {},

  currentFanSpeed: 0,
  autoModeEnableString: 'OFF',
  dualModeEnableString: 'OFF',
  passengerDesiredTemp: 70,
  reciRCulateAirEnableString: 'OFF',
  acEnableString: 'OFF',

  /**
   * GetInteriorVehicleDataConsent
   * Consented app for CLIMATE noduleType
   */
  consentedApp: null,

  climateControlData: {
    currentTempEditDisabled: true,
    temperatureUnit: 'CELSIUS',
    currentTemp: 20,
    desiredTemp: 25,
    acEnable: true,
    acMaxEnable: true,
    circulateAirEnable: true,
    autoModeEnable: true,
    defrostZone: 'ALL',
    dualModeEnable: true,
    fanSpeed: 0,
    currentVentilationMode: 'BOTH'
  },

  setClimateData: function(data) {

    if (data.fanSpeed) {
      this.setFanSpeed(data.fanSpeed);
    }

    if (data.currentTemp) {
      this.setCurrentTemp(data.currentTemp);
    }

    if (data.desiredTemp) {
      this.setDesiredTemp(data.desiredTemp);
    }

    if (data.temperatureUnit) {
      this.setTemperatureUnitCelsiusEnable(data.temperatureUnit);
    }

    if (data.acEnable) {
      this.setAcEnable(data.acEnable);
    }

    if (data.acMaxEnable) {
      this.setAcMaxEnable(data.acMaxEnable);
    }

    if (data.circulateAirEnable) {
      this.setReciRCulateAirEnable(data.circulateAirEnable);
    }

    if (data.autoModeEnable) {
      this.setAutoModeEnable(data.autoModeEnable);
    }

    if (data.defrostZone) {
      this.setDefrostZone(data.defrostZone);
    }

    if (data.dualModeEnable) {
      this.setDualModeEnable(data.dualModeEnable);
    }

    if (data.currentVentilationMode) {
      this.setCurrentVentilationMode(data.currentVentilationMode);
    }

    FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
      null, this.climateControlData);
  },

  fanSpeedUp: function() {
      if (this.climateControlData.fanSpeed < 100) {
        this.set('climateControlData.fanSpeed', 
          this.climateControlData.fanSpeed + 1);
        FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
          null, this.climateControlData);
      }
    },

  fanSpeedDown: function() {
      if (this.climateControlData.fanSpeed > 0) {
        this.set('climateControlData.fanSpeed',
          this.climateControlData.fanSpeed - 1
        );
        FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
          null, this.climateControlData);
      }
    },

  currentTempUp: function() {
      if (this.climateControlData.currentTemp < 40) {
        this.set('climateControlData.currentTemp',
          this.climateControlData.currentTemp + 1
        );
        FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
          null, this.climateControlData);
      }
    },

  currentTempDown: function() {
      if (this.climateControlData.currentTemp > -30) {
        this.set('climateControlData.currentTemp',
          this.climateControlData.currentTemp - 1
        );
        FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
          null, this.climateControlData);
      }
    },

  desiredTempUp: function() {
      if (this.climateControlData.desiredTemp < 30) {
        this.set('climateControlData.desiredTemp',
          this.climateControlData.desiredTemp + 1
        );
        FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
          null, this.climateControlData);
      }
    },

  desiredTempDown: function() {
      if (this.climateControlData.desiredTemp > 14) {
        this.set('climateControlData.desiredTemp',
          this.climateControlData.desiredTemp - 1
        );
        FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
          null, this.climateControlData);
      }
    },

  temperatureUnitFahrenheitEnable: function() {
      this.set('climateControlData.temperatureUnit', 'FAHRENHEIT');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  temperatureUnitCelsiusEnable: function() {
      this.set('climateControlData.temperatureUnit', 'CELSIUS');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  defrostNoneEnable: function() {
      this.set('climateControlData.defrostZone', 'NONE');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  defrostFrontEnable: function() {
      this.set('climateControlData.defrostZone', 'FRONT');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  defrostRearEnable: function() {
      this.set('climateControlData.defrostZone', 'REAR');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  defrostAllEnable: function() {
      this.set('climateControlData.defrostZone', 'ALL');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  ventilationModeNoneEnable: function() {
      this.set('climateControlData.currentVentilationMode', 'NONE');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
  },

  ventilationModeUpperEnable: function() {
      this.set('climateControlData.currentVentilationMode', 'UPPER');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
  },

  ventilationModeLowerEnable: function() {
      this.set('climateControlData.currentVentilationMode', 'LOWER');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
  },

  ventilationModeBothEnable: function() {
      this.set('climateControlData.currentVentilationMode', 'BOTH');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
  },

  toggleDualMode: function() {
      this.toggleProperty('climateControlData.dualModeEnable');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  toggleRecirculateAir: function() {
      this.toggleProperty('climateControlData.circulateAirEnable');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  toggleAcEnable: function() {
      this.toggleProperty('climateControlData.acEnable');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  toggleAcMaxEnable: function() {
      this.toggleProperty('climateControlData.acMaxEnable');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  toggleAutoModeEnable: function() {
      this.toggleProperty('climateControlData.autoModeEnable');
      FFW.RC.onInteriorVehicleDataNotification('CLIMATE',
        null, this.climateControlData);
    },

  toggleCurrentTempAvailable: function() {
    this.toggleProperty('climateControlData.currentTempEditDisabled');
  },

  setFanSpeed: function(speed) {
      this.set('climateControlData.fanSpeed', speed);
    },

  setCurrentTemp: function(temp) {
      this.set('climateControlData.currentTemp', temp);
    },

  setDesiredTemp: function(temp) {
      this.set('climateControlData.desiredTemp', temp);
    },

  setTemperatureUnitCelsiusEnable: function(tempUnit) {
      this.set('climateControlData.temperatureUnit', tempUnit);
    },

  setAcEnable: function(state) {
      this.set('climateControlData.acEnable', state);
    },

  setAcMaxEnable: function(state) {
      this.set('climateControlData.acMaxEnable', state);
  },

  setReciRCulateAirEnable: function(state) {
      this.set('climateControlData.circulateAirEnable', state);
    },

  setAutoModeEnable: function(state) {
      this.set('climateControlData.autoModeEnable', state);
    },

  setDefrostZone: function(defZone) {
      this.set('climateControlData.defrostZone', defZone);
    },

  setDualModeEnable: function(state) {
      this.set('climateControlData.dualModeEnable', state);
    },

  setCurrentVentilationMode: function(state) {
      this.set('climateControlData.currentVentilationMode', state);
  }
}
);
