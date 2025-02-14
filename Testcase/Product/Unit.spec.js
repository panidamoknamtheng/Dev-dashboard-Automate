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
    await expect(Unit.flashMessageSucceuss).toHaveText('บันทึกข้อมูลสำเร็จ');   
});

test('UnActiveUnit', async ({ Unit }) => {
    const isSwitchCheckedBefore = await Unit.productUnitSwitch.isChecked();
    console.log(`Current Switch Status: ${isSwitchCheckedBefore ? 'ON' : 'OFF'}`);
    await Unit.productUnitSwitch.scrollIntoViewIfNeeded();
    await Unit.performUnActiveUnit();
    await Unit.page.waitForTimeout(1000);
    const isSwitchCheckedAfter = await Unit.productUnitSwitch.isChecked();
    expect(isSwitchCheckedAfter).not.toBe(isSwitchCheckedBefore); 
    console.log(`Switch changed from ${isSwitchCheckedBefore ? 'ON' : 'OFF'} to ${isSwitchCheckedAfter ? 'ON' : 'OFF'}`);
});

test('Edit Unit Success', async ({ Unit }) => {
    const expectedUnitName = '1';
    const unitNameCell = Unit.page.locator('table.table-hover.table-bordered tbody tr:nth-child(1) td:nth-child(2)');
    const unitNameBefore = (await unitNameCell.textContent()).trim();
    console.log(`Current Unit Name: ${unitNameBefore}`);
    await Unit.performEditUnit();
    await expect(Unit.flashMessageSucceuss).toHaveText('บันทึกข้อมูลสำเร็จ'); 
    await Unit.page.waitForSelector(`table.table-hover.table-bordered tbody tr:nth-child(1) td:nth-child(2):has-text("${expectedUnitName}")`, { timeout: 5000 });
    await Unit.page.reload();
    await Unit.page.waitForLoadState('networkidle');
    const unitNameAfter = (await unitNameCell.textContent()).trim();
    console.log(`Updated Unit Name: ${unitNameAfter}`);
    if (unitNameAfter !== expectedUnitName) {
        console.error(`ERROR: Unit Name did not change correctly! Expected: "${expectedUnitName}", but got: "${unitNameAfter}"`);
        throw new Error(`Test failed! Expected "${expectedUnitName}", but received "${unitNameAfter}"`);
    }

    expect(unitNameAfter).toBe(expectedUnitName);
});

test('Delete Unit Success', async ({ Unit}) => {
    await Unit.perfomeDeleteUnit(); 
    await expect(Unit.flashMessageDelete).toHaveText('ลบข้อมูลสำเร็จ');   
});