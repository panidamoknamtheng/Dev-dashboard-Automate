const { expect } = require('@playwright/test');
const { test } = require('../pagefixtures/pagefixtures');
const { LoginPage } = require('../page-Object/loginPage');

test.beforeEach(async ({ LoginPage}) => {
    await LoginPage.goto();
});

test('login-success', async ({ LoginPage }) => {
    await LoginPage.performLoginSuccess();
});

test('login-incorrect-password', async ({ LoginPage }) => {
    await LoginPage.performLoginIncorrectpassword();
    await expect(LoginPage.flashMessage).toHaveText('The password is invalid or the user does not have a password.');
});

test('login-incorrect-email', async ({ LoginPage }) => {
    await LoginPage.performLoginIncorrectEmail();
    await expect(LoginPage.flashMessage).toHaveText('There is no user record corresponding to this identifier. The user may have been deleted.');
});

test('login-empty', async ({ LoginPage }) => {
    await LoginPage.performLoginempty();
    await expect(LoginPage.flashMessage).toHaveText('The email address is badly formatted.');
});

test('login-inncorrectemailorpassword', async ({ LoginPage }) => {
    await LoginPage.performLoginncorrectemailorpassword();
    await expect(LoginPage.flashMessage).toHaveText('There is no user record corresponding to this identifier. The user may have been deleted.');
});

