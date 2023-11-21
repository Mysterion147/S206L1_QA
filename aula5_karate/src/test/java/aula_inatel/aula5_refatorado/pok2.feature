Feature: Fazendo aula 5 com api PKM

Scenario: Testando retorno pokemon/pikachu
        Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
        When method get
        Then status 200

Scenario: Testando retorno pokemon/pikachu com informações invalidas 
        Given url 'https://pokeapi.co/api/v2/pokemon/pikachu/12345'
        When method get
        Then status 404