const { test: base } = require('@playwright/test');
const { LoginPage } = require('../page-Object/loginPage');

exports.test = base.extend({
    LoginPage : async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});