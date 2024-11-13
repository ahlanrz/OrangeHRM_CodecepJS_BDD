const { I } = inject();

Given('I click menu button Recruitment', () => {
    I.waitForElement('//span[text()="Recruitment"]', 5);
    // I.amOnPage('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    I.click("//span[normalize-space()='Recruitment']");
});

When('I click button Vancancies', () => {
    I.wait(2);
    I.click("//a[normalize-space(text())='Vacancies']");
});

When('I click button add', () => {
    I.wait(2);
    I.click("//button[normalize-space()='Add']");
});

When('I fill vacancy name', () => {
    I.wait(1);
    I.fillField({xpath: "(//input[@class='oxd-input oxd-input--active'])[2]"}, 'QA Engineer Banking ter');
});

When ('I select job title', () => {
    I.wait(1);
    I.click("//div[@id='app']/div/div[2]/div[2]/div/div/form/div/div[2]/div/div[2]/div/div/div");
    I.wait(1);
    I.click("//span[normalize-space()='QA Engineer']");
});
    // I.wait(1);
    // I.selectOption({xpath:"xpath=//div[@id='app']/div/div[2]/div[2]/div/div/form/div/div[2]/div/div[2]/div/div/div"}, 'QA Engineer');
//});

When ('I fill description', () => {
    I.wait(1);
    I.appendField('textarea', '- Minimum Informatics Engineering Bachelors,\n- 3 years experiences as Quality Assurance,\n- Have a good time management,\n- Able to operate Microsoft Office,\n- Proactive & eager to learn.');
   
});

When ('I fill Hiring Manager', () => {
    I.wait(1);
    I.fillField({xpath: "//input[@placeholder='Type for hints...']"}, 'Steven');
    I.wait(3);
    I.pressKey('ArrowDown');
    I.pressKey('Enter');
});

When ('I fill number of positions', () => {
    I.wait(1);
    I.fillField({xpath: "(//input[@class='oxd-input oxd-input--active'])[3]"}, '3');
    
});

When ('I click save button', () => {
    I.wait(1);
    I.click("//button[@type='submit']");
    I.scrollPageToBottom();
   // I.wait(5);
    
    // I.saveScreenshot('addVacancies.png');
});

Then ('new vacancy successfully added', () => {
    // I.wait(2);
//     I.waitForElement("//div[contains(text(), 'Successfully Saved')]");
    // I.waitForElement("//div[@id='oxd-toaster_1']/div/div/div[2]/p[2]");
    // I.waitForEnabled("//div[contains(text(), 'Successfully Saved')]", '2');
    
    I.waitForText('Successfully Saved', 5)
    I.see('Successfully Saved'); 
    I.wait(2);
    I.saveScreenshot('addVacancies.png');

    I.seeCurrentUrlEquals
});