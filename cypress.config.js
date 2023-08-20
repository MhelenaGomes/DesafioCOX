const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      loginUrl: 'https://www.saucedemo.com/v1',
      username: 'standard_user',
      password: 'secret_sauce',
      firstName: 'Maria',
      lastName: 'Helena',
      zipCode: '60431000',
    },
  },
});
