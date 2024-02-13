# Cypress Automation with Page Objects and Environment Variables

## Overview

This project demonstrates Cypress automation with a structured approach using Page Objects and Environment Variables. Cypress is a powerful end-to-end testing framework that is fast and reliable.

### Features

- **Page Objects Pattern:** Organize your test code by creating reusable page objects for better maintainability.
- **Environment Variables:** Store sensitive information or configuration in environment variables to enhance security.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Setup
**
Clone the repository:
**
   ```bash
  https://github.com/sardarrehanmushtaq/SoumTest.git
**Install dependencies:**
cd your-repo
npm install
In the cypress.config.js file at the root of the project and add your environment variables:
baseUrl:"https://www.saucedemo.com/"
cypress.env.json comtains the environment variables like username etc
**Running Tests**
Run Cypress tests using the following commands:

# Open Cypress Test Runner
npm run cypress:open

# Run tests in headless mode
npm run cypress:run

**Project Structure:**
├── cypress
│   ├── fixtures
│   ├── e2e
│   │   └── Sp.cy.js
│   ├── plugins
│   ├── support
│   │   ├── commands.js
│   │   └── index.js
│   ├── pages
│   │   ├── login_page.js
│   │   └── sauce_demo.js   
│   └── ...
├── cypress.env.json
├── cypress.config.js
├── package.json
└── package-lock.json
cypress/e2e: Wrote test specs here.
cypress/support: Store custom commands and other support files.
cypress/pages: Defined page objects for each page of your application.
cypress.env.json: Configure environment variables.
cypress.config.js: Cypress configuration file. It also contains BaseUrl



