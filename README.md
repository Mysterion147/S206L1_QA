# S206L1_QA
## Repositório para a matéria de Qualidade de Software.

### Repositorio auxiliar da disciplina: https://github.com/chrislima-inatel/S206

### **IMPORTANTE:** testes de UI estao na pasta 'testes' e testes de API na pasta 'aula5_karate', todos com seus respectivos nomes de aula ou atividade de origem. Para mais informacoes, consultar as seçoes deste README

### Relatorio 1 (aula 2) - Introducao ao Cypress, configuraçoes iniciais e exemplo
+ Comando para abrir o Cypress (executar no diretorio em que foram instaladas as dependencias) : './node_modules/.bin/cypress open'

### Relatorio 2 (aula 3) - Criaçao de casos de testes para uma pagina de registro/login de exemplo
+ [Página]( https://globalsqa.com/angularJs-protractor/registration-login-example/#/login) em questao utilizada.

### Relatorio 3 (aula 4) - Finalizacao de testes no GlobalsQA e tutorial de geracao de relatorio
+ ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' <- Comando para rodar os testes do terminal
+ Quando configurado, o relatorio ja é gerado ao fim da execucao


### Trabalho Pratico 1 - Testes de UI com Cypress
+ Dupla: Joao Pedro Maciel e Felipe Conrado
+ Site escolhido: pagina inicial de busca do Google.
+ Como executar o projeto:
  + Baixe o repositorio.
  + Selecione o arquivo "trabalho1" e o mova para o diretorio local onde voce instalou as dependencias do node/cypress.
  + Execute a suite de testes usando o comando "./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'" no diretorio onde estao as dependencias.
  + Caso as configuracoes do Mochawwesome estiverem corretas na sua maquina, o relatorio sera gerado automaticamente na pasta de reports. Caso nao, ha um relatorio pronto neste repositorio.
  + (Mesmo das aulas)


### Relatorio 4 (aula 5) - Introducao ao Karate (testes de API)
+ [Página](https://swapi.dev) em questao utilizada (LEGADO).
+ Resolvendo bugs de execuçao do codigo
  + 'No Tests were executed' (nao esta achando os testes?)
+ Bug resolvido: API indisponivel.
+
+ Refatoração dos testes usando a API do Pokemon.
+ [Página](https://pokeapi.co) em questao utilizada.

### Relatorio 5 (aula 6) - Aprofundamento Karate, relatorios de testes
+ [Página](https://pokeapi.co) em questao utilizada.

### Relatorio 6 (aula 7) - Finalizacao dos testes de API com Karate
+ 
 
### Trabalho Pratico 2 - Testes de API com Karate
+ Feito individualmente
+ API escolhida: https://reqres.in
+ Como executar o projeto:
  + Ter um ambiente configurado para executar testes de API com Karate e gerar relatorio
  + Baixar os arquivos do repositorio, mais especificamente a pasta aula5_karate/trabalho2
  + Executar os testes atraves do comando "mvn test -Dtest=ReqRunner", ou apenas configure o pom para deixar esse Runner como default e use "mvn test"
  + (Mesma coisa das aulas)

 
### Prova - Teste de API com Karate
+ Feito individualmente
+ API escolhida: https://gorest.co.in
+ Como executar o projeto:
  + Ter um ambiente configurado para executar testes de API com Karate e gerar relatorio
  + Baixar os arquivos do repositorio, mais especificamente a pasta aula5_karate/prova
  + Executar os testes atraves do comando "mvn test -Dtest=GraphRunner", ou apenas configure o pom para deixar esse Runner como default e use "mvn test"
  + (Mesma coisa das aulas)
+ Em caso de erro no teste de criar usuario, abrir o json 'create.json' e alterar a string de 'email', trocando o numero por outro, por exemplo. Caso rode o teste mais de uma vez sera necessario trocar pois nao ha como criar o mesmo usuario duas vezes
+ Mesma ideia para o teste de 'delete', em que nao ha como deletar o mesmo usuario duas vezes, entao trocar o id no path.

# Autor: **João Pedro Maciel de Souza**
