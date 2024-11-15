Feature:

Scenario: login with invalid username and password
Given  I navigate to login page website orangeHRM
When I fill in the username with "<username>"
When I fill in the password with "<password>"
When I click on login button
Then I should see error message "<errorMessage>"

Examples:
    |username|password|errorMessage|
    |        |        |Required    |