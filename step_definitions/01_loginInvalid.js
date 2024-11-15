const { I } = inject();

Given('I navigate to login page website orangeHRM', () => {
  I.amOnPage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // ganti dengan URL login aplikasi Anda
});

When('I fill in the username with {string}', (username) => {
  I.fillField('username', username);
});

When('I fill in the password with {string}', (password) => {
  I.fillField('password', password);
});

When('I click the login button', () => {
  I.click('Login');
});

Then('I should see an error message {string}', (errorMessage) => {
  I.see('Required', {xpath:"//span[contains(@class,'oxd-text oxd-text--span')])[1]"}); // ganti dengan selector pesan error pada aplikasi Anda
});