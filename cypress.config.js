const { defineConfig } = require("cypress");
  
module.exports = defineConfig({
  e2e: {
    baseUrl:"https://mp32client.markinsonqa.com",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
 
  },
    defaultCommandTimeout: 100000,
    projectId: "o48yws"
  },
});