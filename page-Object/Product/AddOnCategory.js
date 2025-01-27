const { expect } = require('@playwright/test');

exports.AddOnCategory = class AddOnCategory {

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
        this.flashMessage = page.locator('#productUnitSaveAlert');
        this.productTxtOptionCategoryBtn = page.locator('#productTxtOptionCategory');
        this.productOptionGroupAddBtn = page.locator('#productOptionGroupAddButton');
        this.addOptionGroupNameInput = page.locator('#addOptionGroupNameInputFallback');
        this.RequireCheckbox = page.locator('#addOptionGroupRequireCheckbox');
        this.addGroupMaxInput = page.locator('#addOptionGroupMaxInput');
        this.addOptionBrownSugarBubbles = page.locator('#addOptionGroupItemRow3'); //สามารถเพิ่ม id หรือเปลี่ยนเป็น id ตัวเลือกที่ต้องการ
        this.addOptionGroupSaveBtn = page.locator('#addOptionGroupSaveButton');
        this.edit1 = page.locator('#productOptionGroupEditLink0'); //แก้ไข id ตามตัวเลือกที่ต้องการแก้ไข
        this.editOptionGroupNameInput = page.locator('#editOptionGroupNameInputFallback');
        this.editOptionGroupSaveBtn = page.locator('#editOptionGroupSaveButton');
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
        await this.productTxtOptionCategoryBtn.click();
    }
    async performAddOnCategorySuccess() {
        await this.page.waitForTimeout(1000);
        await this.productOptionGroupAddBtn.click();
        await this.addOptionGroupNameInput.fill('TestAutomate', { state: 'visible', timeout: 1000 });
        await this.addGroupMaxInput.fill('1');
        await this.addOptionBrownSugarBubbles.click(); 
        await this.page.waitForTimeout(1000);
        await this.addOptionGroupSaveBtn.click();
    }
    async performEditNameAddOnCategory(TestAutomate) {
        await this.page.waitForTimeout(1000);
        await this.edit1.click()
        await this.editOptionGroupNameInput.fill('');
        await this.editOptionGroupNameInput.fill('ทดสอบ Automate', { state: 'visible', timeout: 1000 });
        await this.editOptionGroupSaveBtn.click();
        await this.page.waitForTimeout(1000);
    }


}