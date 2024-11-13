Feature: login functionality
  I as a user 
  I want to login to orangeHRM

  Scenario: login with valid username and password
    Given I navigate to website orangeHRM
    When I fill username
    When I fill password
    When I click on the login button
    Then I should see the dashboard page
