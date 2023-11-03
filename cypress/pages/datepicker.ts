 export default class datepicker{

    selectMonth(dateDOB){
        cy.get('select.ui-datepicker-month').select(dateDOB)

    }

    selectyear(yearDOB){
        cy.get('select.ui-datepicker-year').select(yearDOB)

    }

    selectDate(dateDOB){
        cy.get('.ui-state-default').contains(dateDOB).click()

    }

}

