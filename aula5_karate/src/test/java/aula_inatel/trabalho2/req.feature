Feature: Testando a API REQRES 

Background:
  * def url_base = 'https://reqres.in/api'
  * def registerok_json = read('registerok_teste.json')
  * def registerfail_json = read('registerFail_teste.json')
  * def create_json = read('create_teste.json')

Scenario: Listar a primeira pagina de usuarios com sucesso
  Given url url_base
  And path '/users?page=1'
  When method get
  Then status 200
  And match $.page == 1
  And match $.per_page == 6
  And match $.data != []
  And match $.data[0].email == 'george.bluth@reqres.in'
  And match each $.data contains {id: '#number', email: '#string'}

Scenario: Listar as infos de um usuario especifico com sucesso
  Given url url_base
  Given path '/users/5'
  When method get
  Then status 200
  And match $.data.id == 5
  And match $.data.email == 'charles.morris@reqres.in'
  And match $.data.first_name == 'Charles'

Scenario: Listar as infos de um usuario inexistente (negativo)
  Given url url_base
  Given path '/users/147'
  When method get
  Then status 404
  And match $ == {}

Scenario: Realizar registro com sucesso
  Given url url_base
  And path '/register'
  And request registerok_json
  When method post
  Then status 200
  And match $.id == 6

Scenario: Realizar registro com falha (negativo)
  Given url url_base
  And path '/register'
  And request registerfail_json
  When method post
  Then status 400
  And match $.error == "Note: Only defined users succeed registration"

Scenario: Criar um usuario com sucesso
  Given url url_base
  And path '/api/users'
  And request create_json
  When method post
  Then status 201
  And match $.id == '#string'
  And match $.name == create_json.name