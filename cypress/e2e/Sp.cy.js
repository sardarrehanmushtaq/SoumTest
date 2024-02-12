import Login from "../pages/login_page.js"
import Sauce from "../pages/Sauce_demo.js"
import ProductPage from "../pages/Apitests.js"


Cypress.on('uncaught:exception', () => false)

describe('Test Suite for Sauce demo', () => {


it('login pass', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
})
it('login fail with invalid username and invalid password', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername1()
    lp.enterPassword1()
    lp.clickLogin()
})
it('login fail valid username but invalid password', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword1()
    lp.clickLogin()
})
it('login fail invalid username but valid password', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername1()
    lp.enterPassword2()
    lp.clickLogin()

})
it('login fail empty username empty password', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.clickLogin()

})
it('Verifying that I am landing on correct page', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()


})
it('Adding to Cart from Product detail', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickproductdetails()
    sd.clickaddtocart()

})

it('Adding product to cart on home page', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()


})
it('Verifying that product is on cart or not', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.productoncart()


})
it('Removing product from cart', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.removeproductitem()


})
it('Clicking continue without data', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.checkingout()
    sd.clickcontinue()

})
it('Checking out with correct data', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.checkingout()
    sd.customerdata()
    sd.clickcontinue()
    sd.clickfinish()
    cy.wait(5000)



})
it('Going into About', function(){
    const lp=new Login();
    const sd=new Sauce();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickburgermenu()
    sd.clickAbout()
})
//API TESTS 

it('should get product data from the API', () => {
    const pageNumber = 3;
    const size = 4;

    // Using page object to make the API request
    ProductPage.getProductData(pageNumber, size).then((response) => {
      // Asserting API response
      expect(response.status).to.eq(200);
      cy.log('API Response:', response);
      // Add more assertions based on your API response structure
      const productData = response.body;
      cy.log('Product Data:', productData);
        });
  });
it('should handle invalid page number', () => {
    // Using page object to make an API request with an invalid page number
    ProductPage.getProductData('invalidPage', 5).then((response) => {
      // Asserting that the response status is 400 (Bad Request) or 422 (Unprocessable Entity)
      expect(response.status).to.be.oneOf([400, 200]);
      // Add more assertions based on your error handling
    });
  });
it('should handle negative page number', () => {
    // Using page object to make an API request with a negative page number
    ProductPage.getProductData(-1, 5).then((response) => {
      // Asserting that the response status is 400 (Bad Request) or 422 (Unprocessable Entity)
      expect(response.status).to.be.oneOf([400, 200]);
      // Add more assertions based on your error handling
    });
  })
  it('should verify a specific question in the product data', () => {
    // Assuming you have the product data available (replace with your actual data)
    const productData = {
        // ... (the product data)
        "answer_to_questions": "{\"question\":\"Are there any issues with the buttons, plugs or switches in your phone?\",\"answer\":\"Yes, mute slider has some issues\"}"
    };

    try {
        // Parse the stringified JSON response
        const answers = JSON.parse(productData.answer_to_questions);

        // Check if answers is an array
        if (Array.isArray(answers)) {
            // Find the question you want to verify
            const questionToVerify = "Are there any issues with the buttons, plugs or switches in your phone?";
            
            // Find the corresponding answer for the specified question
            const answerForQuestion = answers.find(answer => answer.question === questionToVerify);

            // Assert that the answer for the question matches the expected value
            expect(answerForQuestion.answer).to.equal("Yes, mute slider has some issues");
        } else {
            // Log a warning if answers is not an array
            console.warn('answers is not an array:', answers);
        }

        // Continue with other test steps or assertions as needed
    } catch (error) {
        // Log the error for better debugging
        console.error('Error parsing JSON:', error);
        // Fail the test in case of an error
        throw error;
    }
});

it.only('should verify the presence of the score in the product data', () => {
    // Assuming you have the product data available (replace with your actual data)
    const productData = {
        // ... (the product data)
        "score": 71.5,
    };

    // Assert that the score property exists in the product data
    expect(productData).to.have.property('score');

    // Assert that the value of the score property is a number
    expect(productData.score).to.be.a('number');

    
    expect(productData.score).to.equal(71.5);
});

it('should verify "createdDate" and "updatedDate" in the product data', () => {
    const productData = {
        
        "createdDate": "2021-04-12T07:47:04.861Z",
        "updatedDate": "2021-11-15T13:33:12.534Z",
    };

    expect(productData).to.have.property('createdDate');
    expect(productData.createdDate).to.be.a('string');
    expect(productData).to.have.property('updatedDate');
    expect(productData.updatedDate).to.be.a('string');


});

  
  });
  


  
  





