const { expect } = require('@playwright/test');
const { test } = require('../../pagefixtures/pagefixtures'); 
const { AddOnCategory } = require('../../page-Object/Product/AddOnCategory');

test.beforeEach(async ({ page }) => {
    const addonCategory = new AddOnCategory(page);
    await addonCategory.goto();             
    await addonCategory.performLogin();     
});

test('add Add On Category Success', async ({ AddOnCategory }) => {
    const newCategoryName = 'TestAutomate'; // ชื่อกลุ่มที่ต้องการตรวจสอบ
    await AddOnCategory.performAddOnCategorySuccess();
    const categoryRowLocator = AddOnCategory.page.locator('#productOptionGroupDataTable').getByText(newCategoryName);
    await expect(categoryRowLocator).toBeVisible();
});

test('Edit Add-on Category Name and Verify Change', async ({ AddOnCategory }) => {
    const originalName = 'TestAutomate'; 
    const updatedName = 'ทดสอบ Automate'; 
    await AddOnCategory.performEditNameAddOnCategory(originalName);
    await AddOnCategory.page.waitForTimeout(1000);
    const updatedNameLocator = AddOnCategory.page.locator(
        '#productOptionGroupDataTable',
    ).filter({ hasText: updatedName });
    await updatedNameLocator.waitFor({ state: 'visible', timeout: 5000 });
    const isUpdated = await updatedNameLocator.isVisible();
    expect(isUpdated).toBeTruthy();
});

test('Delete Add-on Category and Verify Removal', async ({ AddOnCategory }) => {
    const deletedCategory = 'ความหวาน'; 
    const addOnRow = AddOnCategory.page.locator(`table.table-hover.table-bordered tbody tr:has-text("${deletedCategory}")`);
    const isRowVisibleBefore = await addOnRow.count() > 0;
    console.log(`Before Deletion: Add-on Category "${deletedCategory}" ${isRowVisibleBefore ? 'FOUND' : 'NOT FOUND'}`);
    await AddOnCategory.performDeleteAddOnCategory(deletedCategory);
    const isRowVisibleAfter = await addOnRow.count() > 0;
    console.log(`After Deletion: Add-on Category "${deletedCategory}" ${isRowVisibleAfter ? 'STILL FOUND (FAIL)' : 'REMOVED (PASS)'}`);
    expect(isRowVisibleAfter).toBeFalsy();
});



