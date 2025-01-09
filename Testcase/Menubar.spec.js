const { test, expect } = require('@playwright/test');
const { MenuBar } = require('../page-Object/MenuBar');

test.describe('Menu Text Verification', () => {
    test.beforeEach(async ({ page }) => {
        const menuBar = new MenuBar(page);
        await menuBar.goto();
        await menuBar.performLogin(); // Perform login before each test
    });

    test('Verify all menu texts are correct', async ({ page }) => {
        const menuBar = new MenuBar(page);
        await menuBar.verifyMenuTexts(); // Validate menu texts
    });
});