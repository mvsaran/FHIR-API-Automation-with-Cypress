const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",   // reports folder
    overwrite: false,               // don’t overwrite old results
    html: true,                     // generate HTML
    json: true                      // generate JSON (for merging later)
  },
  e2e: {
    baseUrl: "https://hapi.fhir.org/baseR4",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
      // implement node event listeners here
    },
  },
});
