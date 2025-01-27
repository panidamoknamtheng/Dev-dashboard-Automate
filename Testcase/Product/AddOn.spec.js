const { expect } = require('@playwright/test');
const { test } = require('../../pagefixtures/pagefixtures'); 
const { AddOn } = require('../../page-Object/Product/AddOn');

test.beforeEach(async ({ page }) => {
    const addon = new AddOn(page);
    await addon.goto();             
    await addon.performLogin();     
});

test('add Add On Success', async ({ AddOn }) => {
    await AddOn.performAddOnSuccess(); 
    await expect(AddOn.flashMessage).toHaveText('Product category has been saved');   
});
