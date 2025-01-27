const { expect } = require('@playwright/test');
const { test } = require('../pagefixtures/pagefixtures');
const { MemberPage } = require('../page-Object/MemberPage');

test.beforeEach(async ({ page }) => {
    const memberPage = new MemberPage(page);
    await memberPage.goto();
    await memberPage.performLogin();
    await memberPage.performMember();
});
test('should search Member successfully', async ({ page }) => {
    const memberPage = new MemberPage(page);
    await memberPage.performMember();
    await memberPage.searchMember();
});
test('should save Member successfully', async ({ page }) => {
    const memberPage = new MemberPage(page);
    await memberPage.performMember();
    await memberPage.addMemberSuccess();
});
test('should not save member without firstname', async ({ page }) => {
    const memberPage = new MemberPage(page);
    await memberPage.performMember();
    await memberPage.addMemberWithoutFirstname();
    await expect(memberPage.createValidationAlert).toHaveText('Please input information');
});
test('should not save member without lastname', async ({ page }) => {
    const memberPage = new MemberPage(page);
    await memberPage.performMember();
    await memberPage.addMemberWithoutLastname();
    await expect(memberPage.createValidationAlert).toHaveText('Please input information');
});
test('should not save member without sex', async ({ page }) => {
    const memberPage = new MemberPage(page);
    await memberPage.performMember();
    await memberPage.addMemberWithoutSex();
    await expect(memberPage.createValidationAlert).toHaveText('Please input information');
});
test('should not save member without tel', async ({ page }) => {
    const memberPage = new MemberPage(page);
    await memberPage.performMember();
    await memberPage.addMemberWithoutTel();
    await expect(memberPage.createValidationAlert).toHaveText('Please input information');
});




