import signUplocator from '../locators/signUplocator'
require('cypress-xpath')

const signlocator = new signUplocator()

export default class signUpPage{

    enterFirstNamenew(firstname){
        cy.xpath(signlocator.enteFirstNameLocator).type(firstname)         
    }

    enterLastName(lastname){
        cy.get(signlocator.enterLastNameLocator).type(lastname)  
    }

    enterEmail(email){
        cy.get(signlocator.enterEmailLocator).type(email)  
    }

    enterPhonenumber(phonenumber){
        cy.get(signlocator.enterPhoneLocator).type(phonenumber)  
    }



    

}


//module.exports = signUpPage;