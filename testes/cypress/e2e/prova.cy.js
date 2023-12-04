/// <reference types="cypress"/>

describe('Cenario de teste para o site Computer Database', () => {
    
    it('Caso de teste: adicionando um computador com sucesso', () => {
        criarPC()
    })

    /*
        O site apenas simula uma criacao, mas nao é de fato possivel bsucar
        um PC criado manualmente. Optei por fazer ambos testes (procurando um existente
        e o que eu acabei de criar) para provar isto, deixando o teste do PC recem criado
        como negativo.
    */
    it('Caso de teste: filtrando um computador com falha (negativo)', () => {
        const searchFor = criarPC()
        cy.get('#searchbox').type(searchFor)
        cy.get('#searchsubmit').click()
        cy.get('.well').should('have.text', 'Nothing to display')
    })

    it('Caso de teste: filtrando um computador com sucesso', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.get('#searchbox').type('BARK')
        cy.get('#searchsubmit').click()
        cy.get('tbody > tr > :nth-child(1)').should('have.text', 'BARK')
        cy.get('.current > a').should('have.text', 'Displaying 1 to 1 of 1')
    })

    it('Caso de teste: deletando um computador com sucesso', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.get('.topRight > .btn').click({ force: true })
        cy.get('strong').should('contain.text', 'Done')
        cy.get('.alert-message').should('contain.text', 'deleted')
    })

})

function criarPC(){

    // variaveis para guardar a data de hoje e ontem (momento da execucao)
    const hoje = new Date();
    const hojeForm = hoje.toISOString().split('T')[0];
    const ontem = new Date();
    ontem.setDate(ontem.getDate() - 1);
    const ontemForm = ontem.toISOString().split('T')[0];
    
    const nome = hojeForm+ontemForm

    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('#name').type(nome)
    cy.get('#introduced').type(ontemForm)
    cy.get('#discontinued').type(hojeForm)
    cy.get('#company').select('ASUS')
    cy.get('.primary').click()
    cy.get('strong').should('contain.text', 'Done')
    cy.get('.alert-message').should('contain.text', nome)

    return nome
}