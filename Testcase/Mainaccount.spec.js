const { test, expect } = require('@playwright/test');
const { Mainaccount } = require('../page-Object/Mainaccount'); 

test.describe('Menu Text Verification in Multiple Languages', () => {
    let mainAccount;

    test.beforeEach(async ({ page }) => {
        mainAccount = new Mainaccount(page);
        await mainAccount.goto();
        await mainAccount.performLogin();
    });

    test('Verify Menu and Page Texts in English', async ({ page }) => {
        await mainAccount.verifyText('Eng');
    });

    test('Verify Menu and Page Texts in Thai', async ({ page }) => {
        await mainAccount.verifyText('Thai');
    });

    test('Verify packageBtn', async ({ page }) => {
        const button = page.locator('#packageAndHistoryRenewButton-0');
        await expect(button).toBeVisible();
        const buttonText = await button.textContent();
        expect(buttonText.trim()).toBe('Renew Package'); 
        await button.click();
        const confirmationMessage = page.locator('text=Package renewed successfully'); 
        await expect(confirmationMessage).toBeVisible();
        await page.waitForSelector('#packageRenewCardBody', { state: 'attached', timeout: 3000 });

    });
});

