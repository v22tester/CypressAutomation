const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  trashAssetsBeforeRuns: true,
  video:true,
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
     reportDir: 'cypress/reports',
     reportFilename: "custom-report_Name.html", // default is index.html to change the html file name change here
     overwrite: false,
     html: true,
     json: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});
