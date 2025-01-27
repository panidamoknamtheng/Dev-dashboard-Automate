const { expect } = require('@playwright/test');
const { test } = require('../../pagefixtures/pagefixtures'); 
const { Unit } = require('../../page-Object/Product/Unit');

test.beforeEach(async ({ page }) => {
    const unit = new Unit(page);
    await unit.goto();             
    await unit.performLogin();     
});

test('add Unit Success', async ({ Unit}) => {
    await Unit.performAddUnitSuccess(); 
    await expect(Unit.flashMessage).toHaveText('Product category has been saved');   
});
