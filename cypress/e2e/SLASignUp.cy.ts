/// <reference types="Cypress" />
require('cypress-xpath')
//import the class
import signUpPage from '../pages/signupPage'


//create class object
const signupobj = new signUpPage()


describe('SLA It Sign Up', () => {

  //test cases
  it('Sign Up', () => {

    //launch the application
    cy.visit('https://www.slaitsolutions.com/')
    cy.get('.btn-accent').contains('SignUp').click()

    //call class method
        
      signupobj.enterFirstNamenew('Ashok')
      signupobj.enterLastName('Kumar')
      signupobj.enterEmail('ahosk.kumar@gmail.com')
      signupobj.enterPhonenumber('99999999')
   

    cy.get('[name=course]').select('MSc IT')
    cy.get('[name=username]').type('kumar')
    cy.get('[name=password]').type('Ashok56')
    cy.get('[name=confirm_password]').type('Ashok56')
    cy.get('[name=address1]').type('kumar')
    cy.get('[name=address2]').type('Ashok1@gmail.com')
    cy.get('[name=city]').type('hyd')
    cy.get('[name=postcode]').type('kumar')
    cy.get('[name=country]').select('INDIA')
    cy.get('[type=submit]').click()
    cy.get('[role=alert]').then((f1) => {

      assert.include(f1.text(), 'Error')
      assert.include(f1.text(), 'Email Already Exists')
      assert.include(f1.text(), 'Username Already Exists.')

    })

    cy.get('form.col-md-8 > :nth-child(1)').should('have.text', 'Your details')

  })





})
