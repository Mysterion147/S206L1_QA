/// <reference types="cypress"/>

describe('Cenario de teste para o buscador Google', () => {

    it('Caso de teste: fazendo uma busca com sucesso', () => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').click()
        let stringBusca = 'teste' // string usada na busca, pode ser alterada
        cy.get('#APjFqb').type(stringBusca)
        // duas opcoes diferentes para realizar a busca, auto excludentes
        cy.get('#APjFqb').type('{enter}') // simula a tecla "Enter" do teclado
        // cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click() // simula o apertar da tecla "Pesquisa Google"

        // checa se o termo buscado esta de fato na barra de pesquisa e se a pesquisa foi feita checando
        // a existencia do container que mostra quantos resultados foram achados. elementos comuns dentre
        // todo tipo de busca: padrao, palavras de dicionario, imagens etc
        cy.get('#APjFqb').should('contain.text', stringBusca).get('#result-stats').should('exist')
    })

    it('Caso de teste: fazendo uma busca avancada (exclusao) com sucesso', () => {
        // string a ser buscada e a ser excluida, respectivamente
        let stringDesejada = 'teste1';
        let stringIndesejada = 'teste2';
        cy.visit('https://www.google.com')
        cy.get('.ayzqOc').click()
        // o force esta sendo usado, como sugestao do Cypress, para contornar um elemento que esta obscurecendo
        // o botao desejado
        cy.get(':nth-child(2) > .YpcDnf > a').click({ force: true })
        cy.get('#xX4UFf').click()
        cy.get('#xX4UFf').type(stringDesejada)
        cy.get('#t2dX1c').click()
        cy.get('#t2dX1c').type(stringIndesejada)
        cy.get('.jfk-button').click()
        // confere se a String correta foi buscada ("desejada -indesejada") e se existe o status de busca
        cy.get('#APjFqb').should('contain.text', `${stringDesejada} -${stringIndesejada}`).get('#result-stats').should('exist')
    })

    it('Caso de teste: mudando o Google para tema escuro com sucesso', () => {
        cy.visit('https://www.google.com')
        cy.get('.ayzqOc').click()
        // o force esta sendo usado, como sugestao do Cypress, para contornar um elemento que esta obscurecendo
        // o botao desejado
        cy.get('.tFYjZe > :nth-child(1)').click({ force: true });
        cy.get('body').should('have.css', 'background-color', 'rgb(32, 33, 36)'); // confere se o corpo da pagina mudou para cinza
    })

    it('Caso de teste: acessando os termos de servico do Google', () => {
        cy.visit('https://www.google.com')
        cy.get('[href="https://policies.google.com/terms?hl=pt-BR&fg=1"]').click()
        cy.get('.gb_fd').should('contain.text', 'Termos de Serviço')
    })

    it('Caso de teste: acessando os primeiros termos de privacidade do Google (99)', () => {
        cy.visit('https://www.google.com')
        cy.get('[href="https://policies.google.com/privacy?hl=pt-BR&fg=1"]').click()
        cy.get('.nrAB0c > [href="privacy/archive?hl=pt-BR&fg=1"]').click()
        cy.get(':nth-child(41) > a').click()
        cy.get('.nrAB0c > :nth-child(18)').should('contain.text', '1999') // confere se a data de ultima att foi de fato em 99
    })

    it('Caso de teste: nao retorna resultados para uma pesquisa invalida', () => {
        cy.visit('https://www.google.com');
        const consultaInvalida = 'fosuiadegfhouidashgfouiasedgfheaowrigheriosdfghioer';
        cy.get('#APjFqb').click()
        cy.get('#APjFqb').type(consultaInvalida)
        // duas opcoes diferentes para realizar a busca, auto excludentes
        cy.get('#APjFqb').type('{enter}') // simula a tecla "Enter" do teclado
        // cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click() // simula o apertar da tecla "Pesquisa Google"

        cy.get('.v3jTId').should('have.text', 'Sua pesquisa não encontrou nenhum documento correspondente') // confere se ha mensagem indicando que nao houveram resultados
      })

})