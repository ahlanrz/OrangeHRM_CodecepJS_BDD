Feature: add new vacancies
    I as a Super Admin
    I want to add new vacancies

  Scenario: add new vacancies for QA Engineer
    Given I click menu button Recruitment
    When I click button Vancancies
    When I click button add
    When I fill vacancy name
    When I select job title
    When I fill description
    When I fill Hiring Manager
    When I fill number of positions
    When I click save button
    Then new vacancy successfully added