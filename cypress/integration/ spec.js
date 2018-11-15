describe('My app testing', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Текст на странице', () => {
        //cy.visit('http://localhost:8080/')
        cy.contains('Как собрать Vue проект с typesScript для unit тестов, и не сойти с ума')
    })

    it('Количество элементов списка', () => {
        //cy.visit('http://localhost:8080/')
        cy.get('.list-item').should('have.length', 30)
    })

    it('Счетчик показывает ноль', () => {
        cy.get('.count').contains('0')
    })

    it('Счетчик показывает единицу', () => {
        cy.get('#increment').click()
        cy.get('.count').contains('1')
    })
})