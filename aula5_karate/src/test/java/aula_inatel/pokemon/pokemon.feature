Feature: Testando API Pokemon.

Background:
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno. 
        Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
        When method get
        Then status 200

Scenario: Testando retorno com infos invalidas. 
        Given url 'https://pokeapi.co/api/v2/pokemon/belligol'
        When method get
        Then status 404

Scenario: Testando retorno pikachu e verificando json. 
        Given url url_base
        And path 'pokemon/pikachu'
        When method get
        Then status 200
        And match response.name  == 'pikachu'
        And match response.id  == 25

Scenario: Testando retorno de um dos elementos do array de idiomas do PKM Red e verificando JSON. 
        Given url url_base
        And path '/version/1/'
        When method get
        Then status 200
        And def idioma = $.names[5].language.url
        And print idioma
        And url idioma
        When method get
        Then status 200
        Then match response.name == 'es'
        Then match response.id == 7