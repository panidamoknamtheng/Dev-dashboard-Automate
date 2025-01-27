const { expect } = require('@playwright/test');

exports.Category = class Category {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('#email-input');
        this.passwordField = page.locator('#password-input');
        this.singinBtn = page.locator('#sign-in-button');
        this.selectShopDropdown = page.locator('#selectShopDropdown');
        this.productManagementDropdownBtn = page.locator('#productManagementDropdown');
        this.CategoryBar = page.locator('#productCategory');
        this.CategoryAddButton = page.locator('#productCategoryAddButton');
        this.CategoryNameInput = page.locator('#productCategoryNameInputFallback');
        this.colorButton = page.locator('#productCategoryAddModal #productCategoryColorButton'); // เจาะจง Modal
        this.colorPicker = page.locator('#productCategoryColorPickerCard');
        this.productCategorySaveBtn = page.locator('#productCategoryAddModal #productCategorySaveButton');
        this.flashMessage = page.locator('#productCategorySaveAlert');
        this.editCategory = page.locator('#productCategoryeditModal16');
        this.editCategoryNameInput = page.locator('#productCategoryInputNameFallback');
        this.EditproductCategorySaveBtn = page.locator('#productCategoryEditModal #productCategorySaveButton');
        this.productCategoryDelete = page.locator('#productCategoryDeleteModal16');
        this.productCategoryDeleteBtn = page.locator('#productCategoryDeleteButton');
        this.switchInput = page.locator('#productCategorySwitchEnabled2');
        this.Switchshowcustomermenu = page.locator('#productCategorySwitchIsmenu2');
    }
    async goto() {
        await this.page.goto('https://silompos-dev.web.app/login');
        //await this.page.goto('https://dashboard.silompos.app/login/'); //PROD
    }

    async performLogin() {
        await this.page.locator('#email-input').fill('panida.2554@hotmail.com');
        await this.page.locator('#password-input').fill('panida092');
        await this.page.locator('#sign-in-button').click();
        await this.page.waitForSelector('#silomConnectQRModalFooterCheckbox', { state: 'visible', timeout: 10000 });
        await this.page.locator('#silomConnectQRModalFooterCheckbox').click();
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 10000 });
        await this.selectShopDropdown.selectOption('Para - บางหว้า 🏠');
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 5000 });
        await this.productManagementDropdownBtn.click();
        await this.CategoryBar.click();
    }

    async performAddCategorySuccess(colorValue = '2') {
        await this.page.waitForTimeout(3000);
        await this.CategoryAddButton.click();
        await this.page.waitForTimeout(1000);
        await this.CategoryNameInput.fill('เครื่องปรุ่ง2', { state: 'visible', timeout: 1000 });
        await this.colorButton.click();
        await this.colorPicker.waitFor({ state: 'visible', timeout: 5000 });
        const colorOption = this.page.locator(`.row.justify-content-center div[value="${colorValue}"]`);
        await colorOption.click();
        await this.page.waitForTimeout(1000);
        await this.productCategorySaveBtn.click();

    }
    async performEditCategorySuccess() {
        await this.page.waitForTimeout(2000);
        await this.editCategory.click();
        await this.editCategoryNameInput.waitFor({ state: 'visible', timeout: 5000 });
        await this.editCategoryNameInput.fill('');
        await this.editCategoryNameInput.fill('newName');
        await this.EditproductCategorySaveBtn.waitFor({ state: 'visible', timeout: 5000 });
        await this.EditproductCategorySaveBtn.click();
    }

    async performDeleteCategorySuccess() {
        await this.page.waitForTimeout(2000);
        await this.productCategoryDelete.click();
        await this.productCategoryDeleteBtn.waitFor({ state: 'visible', timeout: 1000 });
        await this.productCategoryDeleteBtn.click();
        await this.page.waitForTimeout(2000);
    }
    async toggleSwitchActive(switchId) {
            const switchSlider = this.page.locator(`#${switchId} + .c-switch-slider`);
            await switchSlider.waitFor({ state: 'visible', timeout: 5000 });
            await switchSlider.click();
    }

    async toggleSwitchshowcustomermenu(switchId) {
        const Switchshowcustomermenu = this.page.locator(`#${switchId} + .c-switch-slider`);
        await Switchshowcustomermenu.waitFor({ state: 'visible', timeout: 5000 });
        await Switchshowcustomermenu.click();
}

}