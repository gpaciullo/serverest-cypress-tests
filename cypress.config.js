const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  chromeWebSecurity: false,

  reporter: "cypress-mochawesome-reporter",

  e2e: {
    baseUrl: "https://front.serverest.dev",

    env: {
      apiUrl: "https://serverest.dev",
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
