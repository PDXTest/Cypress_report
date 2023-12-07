import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import signUpPage from '../../pages/signupPage'

//create class object
const signupobj = new signUpPage()
    Given('User want to launch the website', () => {
        cy.visit('https://www.slaitsolutions.com/')
    })

    When('User enters the signup details', () => {
        cy.get('.btn-accent').contains('SignUp').click() 
        cy.fixture('SignupData.json').then((personaldetails) => {            
        signupobj.enterFirstNamenew(personaldetails.fname)
        signupobj.enterLastName(personaldetails.lname)
        
        })
    })

    Then('User click on signup button', () => {
        signupobj.enterEmail('Ashok@gmail.com')
        signupobj.enterPhonenumber('99999999')
    })



        
       

