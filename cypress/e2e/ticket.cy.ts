/// <reference types="Cypress" />
require('cypress-xpath')

import datepicker from '../pages/datepicker'

const datepickerobj = new datepicker()


describe('SLA It Sign Up', () => {

    //test cases
    it('Booking', () => {

        cy.visit('http://www.dummyticket.com/dummy-ticket-for-visa-application/')

        // selecting date of birth
        cy.get('#dob').click()

        const dateDOB = '15'
        const monthDOB = 'Mar'
        const yearDOB = '2022'

        datepickerobj.selectyear(yearDOB)
        datepickerobj.selectMonth(monthDOB)
        datepickerobj.selectDate(dateDOB)

        // selecting departure date
        cy.get('#departon').click()

        const dateDep = '12'
        const monthDep = 'Jun'
        const yearDep = '2024'

        cy.get('select.ui-datepicker-year').select(yearDep)
        cy.get('select.ui-datepicker-month').select(monthDep)
        cy.get('.ui-state-default').contains(dateDep).click()

    })
})