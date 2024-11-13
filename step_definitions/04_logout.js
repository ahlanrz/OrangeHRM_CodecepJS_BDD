const { I } = inject();

Given('I click profile button', () => {
    I.wait(5);
    I.click("//li[@class='oxd-userdropdown']//span[1]");
    I.wait(3);
});

When('I click button logout from dropdown', () => {
    I.click("//a[normalize-space(text())='Logout']");
    I.wait(1);
});

Then('I success logout', () => {
    I.wait(2);
    I.see('Login');
    I.saveScreenshot('Logout.png');
});