const { expect } = require('@playwright/test');
const { test } = require('../pagefixtures/pagefixtures');
const { LoginPage } = require('../page-Object/loginPage');

test.beforeEach(async ({ LoginPage}) => {
    await LoginPage.goto();
});

test('login', async ({ LoginPage }) => {
    await LoginPage.performLoginSuccess();
});


