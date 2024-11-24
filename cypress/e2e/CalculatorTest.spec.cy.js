import 'cypress-mochawesome-reporter/register';
//making changes 
//another branch
// test suite name
describe('Tutorialspoint Test', function () {
   // Test case
   // it.only will run only that test case it will ignore other test cases 
   
   it('Scenario 1 : ADD', function () {
      // test step for URL launching
      cy.fixture('datasetup').then((data) => {
         cy.visit(data.urls.googleurl);
         cy.log("google URL :"+data.urls.googleurl); // to display in log
         cy.get(data.inputs.searchforxpath).type(data.inputs.searchfor); // for ID xpath
         // below FPdoLc is the parent dev class after that we have center tag inside of it we have dev calss gNO89b
         cy.get(data.inputs.googlesearchxpth).should('contain', 'Google Search'); 
         cy.get(data.inputs.submitxpath).eq(0).click(); // xpath input tag and it's class name
         
         cy.get(data.numbers.one).click();
         cy.get(data.calculation.add).click();
         cy.get(data.numbers.two).click();
         cy.get(data.calculation.equals).click();
         
         cy.wait(1000);
         cy.screenshot();

         cy.get('#cwos').then(($result) => {
            const resultText = $result.text();
            cy.log("resultText value : "+resultText);
            expect(resultText).to.equal(''+data.output.addresult);
            cy.get('.vUGUtc').invoke('text').then((expression) => {
               cy.log("expression value : "+expression);
              // expect(expression).to.equal('1 + 2 ='); // Check the expression
             });
          });
      });
   });
   it('Scenario 2 : Subtraction ', function () {
      // test step for URL launching
      cy.fixture('datasetup').then((data) => {
         cy.visit(data.urls.googleurl);
         cy.log("google URL :"+data.urls.googleurl); // to display in log
         cy.get(data.inputs.searchforxpath).type(data.inputs.searchfor); // for ID xpath
         // below FPdoLc is the parent dev class after that we have center tag inside of it we have dev calss gNO89b
         cy.get(data.inputs.googlesearchxpth).should('contain', 'Google Search'); 
         cy.get(data.inputs.submitxpath).eq(0).click(); // xpath input tag and it's class name
        
         cy.get(data.numbers.four).click();
         cy.get(data.calculation.subtraction).click();
         cy.get(data.numbers.three).click();
         cy.get(data.calculation.equals).click();
         
         cy.wait(1000);
         cy.screenshot();

         cy.get('#cwos').then(($result) => {
            const resultText = $result.text();
            cy.log("resultText value : "+resultText);
            expect(resultText).to.equal(''+data.output.subtractionresult);
            cy.get('.vUGUtc').invoke('text').then((expression) => {
               cy.log("expression value : "+expression);
            });
          });
      });
   });
   it('Scenario 3 : Multiplication ', function () {
      // test step for URL launching
      cy.fixture('datasetup').then((data) => {
         cy.visit(data.urls.googleurl);
         cy.log("google URL :"+data.urls.googleurl); // to display in log
         cy.get(data.inputs.searchforxpath).type(data.inputs.searchfor); // for ID xpath
         // below FPdoLc is the parent dev class after that we have center tag inside of it we have dev calss gNO89b
         cy.get(data.inputs.googlesearchxpth).should('contain', 'Google Search'); 
         cy.get(data.inputs.submitxpath).eq(0).click(); // xpath input tag and it's class name
        
         cy.get(data.numbers.five).click();
         cy.get(data.calculation.multiplication).click();
         cy.get(data.numbers.eight).click();
         cy.get(data.calculation.equals).click();
         
         cy.wait(1000);
         cy.screenshot();

         cy.get('#cwos').then(($result) => {
            const resultText = $result.text();
            cy.log("resultText value : "+resultText);
            expect(resultText).to.equal(''+data.output.multiplicationresult);
            cy.get('.vUGUtc').invoke('text').then((expression) => {
               cy.log("expression value : "+expression);
               //expect(expression).to.equal('5 × 8 =');
            });
          });
      });
   });
   it('Scenario 4 : Division ', function () {
      // test step for URL launching
      cy.fixture('datasetup').then((data) => {
         cy.visit(data.urls.googleurl);
         cy.log("google URL :"+data.urls.googleurl); // to display in log
         cy.get(data.inputs.searchforxpath).type(data.inputs.searchfor); // for ID xpath
         // below FPdoLc is the parent dev class after that we have center tag inside of it we have dev calss gNO89b
         cy.get(data.inputs.googlesearchxpth).should('contain', 'Google Search'); 
         cy.get(data.inputs.submitxpath).eq(0).click(); // xpath input tag and it's class name
        
         cy.get(data.numbers.nine).click();
         cy.get(data.calculation.division).click();
         cy.get(data.numbers.six).click();
         cy.get(data.calculation.equals).click();
         
         cy.wait(1000);
         cy.screenshot();

         cy.get('#cwos').then(($result) => {
            const resultText = $result.text();
            cy.log("resultText value : "+resultText);
            expect(resultText).to.equal(''+data.output.divisionresult);
            cy.get('.vUGUtc').invoke('text').then((expression) => {
               cy.log("expression value : "+expression);
             });
          });
      });
   });
});
