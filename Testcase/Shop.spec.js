const { expect } = require('@playwright/test');
const { test } = require('../pagefixtures/pagefixtures');
const { ShopPage } = require('../page-Object/ShopPage');

test.describe('Shop Page', () => {
    test.beforeEach(async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.goto();
        await shopPage.performLogin();
        await shopPage.performShop();
    });

    test('should save shop name successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.saveShopName('Blue');
        const updatedShopName = await shopPage.shopNameInput.inputValue();
        await expect(updatedShopName).toBe('Blue');
        await expect(shopPage.flashMessageSuccess).toHaveText('Saved successfully');
    });

    test('should save branch name successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.BranchName('แรก');
        const updatedBranchName = await shopPage.BranchNameInput.inputValue();
        await expect(updatedBranchName).toBe('แรก');
        await expect(shopPage.flashMessageSuccess).toHaveText('Saved successfully');

    });

    test('should save business type successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.saveBusinessType();
        const selectedOption = await shopPage.BusinessType.inputValue();
        expect(selectedOption).toBe('0');
        const successMessage = await page.locator('#shopSettingAlertSuccess');
        await expect(successMessage).toBeVisible();
    });

    test('should save Tax ID successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.shopSettingTaxIDInput('123456789123');
        const updatedTaxIDInput = await shopPage.TaxIDInput.inputValue();
        await expect(updatedTaxIDInput).toBe('123456789123');
        await expect(shopPage.flashMessageSuccess).toHaveText('Saved successfully');
    });

    test('should save Vat successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.saveVat('5');
        const updatedSettingVatInput = await shopPage.SettingVatInput.inputValue();
        await expect(updatedSettingVatInput).toBe('5');
        await expect(shopPage.flashMessageSuccess).toHaveText('Saved successfully');
    });

    test('should save Service Charge successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.saveServiceChargeInput('10');
        const updatedServiceChargeInput = await shopPage.ServiceChargeInput.inputValue();
        await expect(updatedServiceChargeInput).toBe('10');
        await expect(shopPage.flashMessageSuccess).toHaveText('Saved successfully');
    });

    test('should set open and close time successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.saveSettingTimePicker();
        const savedOpenTime = await page.locator('#shopSettingOpenTimePicker').inputValue();
        const savedCloseTime = await page.locator('#shopSettingClosedTimePicker').inputValue();
        const expectedOpenTime = '10:00';
        const expectedCloseTime = '21:00';
        expect(savedOpenTime).toBe(expectedOpenTime);
        expect(savedCloseTime).toBe(expectedCloseTime);
        console.log(`Verified Open Time: ${savedOpenTime}, Close Time: ${savedCloseTime}`);
        await expect(shopPage.flashMessageSuccess).toHaveText('Saved successfully');
    });

    test('should save Address successfully', async ({ page }) => {
        const shopPage = new ShopPage(page);
        await shopPage.saveAddress('ชั้น1 909 On Nut Rd, Suan Luang, Bangkok 10250');
        const updatedAddress = await shopPage.SettingAddress1Input.inputValue();
        await expect(updatedAddress).toBe('ชั้น1 909 On Nut Rd, Suan Luang, Bangkok 10250');
        
        await expect(shopPage.flashMessageSuccess).toHaveText('Saved successfully');
    });



});