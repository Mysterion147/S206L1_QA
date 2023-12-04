Feature: Testando a API GraphQL

Background:
    * def url_base = 'https://gorest.co.in/public/'
    * def access_token = 'bbda11a51941770480d7ec50d9b60ddc9a9db270b984b53595da7ec272d7e70d'
    * configure headers = { 'Content-Type': 'application/json' }
    * header Authorization = 'Bearer ' + access_token
    
    * def createUser_json = read('create.json')
    * def createPost_json = read('create2.json')

Scenario: Listando todos usuarios com sucesso
    Given url url_base
    And path 'v2/users'
    When method get
    Then status 200
    And match each $ contains {id: '#number', name: '#string', email: '#string', gender: '#string', status: '#string'}

Scenario: Listando todos os posts com sucesso
    Given url url_base
    And path 'v2/posts'
    When method get
    Then status 200
    And match each $ contains {id: '#number', body: '#string'}

Scenario: Criando um novo usuario com sucesso
    Given url url_base
    And path 'v2/users'
    And request createUser_json
    When method post 
    Then status 201
    And match $.name == create_json.name

Scenario: Listando as informacoes de um usuario invalido (negativo)
    Given url url_base
    And path 'v2/users/147'
    When method get
    Then status 404
    And match $.message == "Resource not found"

Scenario: Deletando um usuario com sucesso
    Given url url_base
    And path 'v2/users/5710557'
    When method delete
    Then status 204