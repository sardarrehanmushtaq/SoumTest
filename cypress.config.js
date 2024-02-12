const { defineConfig } = require("cypress");
  
module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.saucedemo.com/",
    baseUrl2:"https://api.qa.soum.sa/api-v2/rest/api/v1/product/",
    chromeWebSecurity: false,
  

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
 
  },
    defaultCommandTimeout: 1500000,
    projectId: "o48yws"
  },
  
});