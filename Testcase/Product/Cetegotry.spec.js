const { expect } = require('@playwright/test');
const { test } = require('../../pagefixtures/pagefixtures'); 
const { Category } = require('../../page-Object/Product/Category');

test.beforeEach(async ({ page }) => {
    const category = new Category(page);
    await category.goto();             
    await category.performLogin();     
});

test('add category Success', async ({ Category }) => {
    await Category.performAddCategorySuccess(); 
    await expect(Category.flashMessage).toHaveText('Product category has been saved');   
});

test('Edit category Success', async ({ Category }) => {
    const newCategoryName = 'newName'; //แก้ไขตามชื่อที่เปลี่ยนใน Category.js
    await Category.performEditCategorySuccess(newCategoryName); 
    await expect(Category.flashMessage).toHaveText('Product category has been saved'); 
    const updatedCategory = Category.page.locator(`text=${newCategoryName}`);
    await updatedCategory.waitFor({ state: 'visible', timeout: 5000 });
    await expect(updatedCategory).toHaveText(newCategoryName);  
});

test('Edit category Success - ภาษาไทย', async ({ Category }) => {
    const newCategoryName = 'newName'; //แก้ไขตามชื่อที่เปลี่ยนใน Category.js
    await Category.performEditCategorySuccess(newCategoryName);
    const updatedCategory = Category.page.locator(`text=${newCategoryName}`);
    await updatedCategory.waitFor({ state: 'visible', timeout: 5000 });
    await expect(updatedCategory).toHaveText(newCategoryName);  
    await expect(Category.flashMessage).toHaveText('บันทึกกลุ่มสินค้าเรียบร้อย');
});

test('Delete category Success', async ({ Category }) => {
    const categoryNameToDelete = 'newName';
    await Category.performDeleteCategorySuccess(categoryNameToDelete);
    const deletedCategory = Category.page.locator(`text=${categoryNameToDelete}`);
    await expect(deletedCategory).toBeHidden();
});

test('Toggle category switch Active', async ({ Category }) => {
    await Category.toggleSwitchActive('productCategorySwitchEnabled2');
    const switchInput = Category.page.locator('#productCategorySwitchEnabled2');
    const isChecked = await switchInput.isChecked();
    console.log(`Switch is now ${isChecked ? 'enabled' : 'disabled'}`);
    expect(isChecked).toBe(true); //อยู่ที่สวิตซ์เปิดหรือปิด
});

test('Toggle category switch by category name', async ({ Category }) => {
    await Category.toggleSwitchshowcustomermenu('productCategorySwitchIsmenu2');
    const switchInput = Category.page.locator('#productCategorySwitchIsmenu2');
    const isChecked = await switchInput.isChecked();
    console.log(`Switch is now ${isChecked ? 'enabled' : 'disabled'}`);
    expect(isChecked).toBe(false); // หรือ false
    await expect(Category.flashMessage).toHaveText('Product category has been saved'); 
});