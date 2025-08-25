const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://hapi.fhir.org/baseR4",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
