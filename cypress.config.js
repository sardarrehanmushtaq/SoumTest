const { defineConfig } = require("cypress");
  
module.exports = defineConfig({
  e2e: {
    baseUrl:"https://mp32client.markinsondev.com/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
 
  },
    defaultCommandTimeout: 500000000,
    projectId: "o48yws"
  },
});