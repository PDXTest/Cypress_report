import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    preprocessor(config, {
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true
    },
    "video" : false
 },
 
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
  
});



  // "cypress-cucumber-preprocessor":{

  //    "cucumberJson":{
  //     "generate": true,
  //     "output": "cypress/reports/cucumber-json",
  //     "filePrefix": "",
  //     "fireSuffix":".cucumber",
  //     "overwrite": true
  //    },

  //    "nonGlobalStepDefinitions":false,
  //    "step_definitions": "cypress/support/step_definitions"
  // },