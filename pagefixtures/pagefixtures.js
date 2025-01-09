const { test: base } = require('@playwright/test');
const { LoginPage } = require('../page-Object/loginPage');
const { MenuBar } = require('../page-Object/MenuBar');

exports.test = base.extend({
    LoginPage : async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    MenuBar : async ({ page }, use) => {
        await use(new MenuBar(page));
    }
});