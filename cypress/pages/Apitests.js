class ProductPage {
    constructor() {
      this.productEndpoint = Cypress.config('baseUrl2')
    }
  
    getProductData(pageNumber, size) {
      const apiUrl = `${this.productEndpoint}?page%20number=${pageNumber}&size=${size}`;
      return cy.request(apiUrl);
    }
  }
  
  export default new ProductPage();
  