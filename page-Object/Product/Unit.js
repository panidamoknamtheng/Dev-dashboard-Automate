const { expect } = require('@playwright/test');

exports.Unit = class Unit {

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
        this.productUnitBtn = page.locator('#productUnit');
        this.productUnitAddBtn = page.locator('#productUnitAddButton');
        this.productUnitNameInput = page.locator('#productUnitNameInputNoValidate');
        this.productUnitSaveBtn = page.locator('#productUnitSaveButton');
        this.flashMessageSucceuss = page.locator('#productUnitAlertSaveSuccess');
        this.productUnitSwitch = page.locator('#productUnitSwitch0'); //เปลี่ยน id ตาม Unit ที่ต้องการปิด
        this.productUnitEditIcon = page.locator('#productUnitEditIcon0'); // เปลี่ยน id ตาม Unit ที่ต้องการแก้
        this.productEditUnitNameInput = page.locator('#productUnitNameInputNoValidate');
        this.productUnitSaveBtn = page.locator('#productUnitSaveButton');
        this.productUnitDeleteIcon = page.locator('#productUnitDeleteIcon0'); // เปลี่ยน id ตาม Unit ที่ต้องการลบ
        this.productUnitDeleteBtn = page.locator('#productUnitDeleteButton');
        this.flashMessageDelete = page.locator('#productUnitAlertDeleteSuccess');
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
        await this.productUnitBtn.click();
    }

    async performAddUnitSuccess() { //สร้างหน่วยบรรจุ
        await this.page.waitForTimeout(3000);
        await this.productUnitAddBtn.click();
        await this.productUnitNameInput.fill('บรรจุ2');
        await this.productUnitSaveBtn.click();
    }

    async performUnActiveUnit() {
        await this.productUnitSwitch.waitFor({ state: 'visible' });
        const isCheckedBefore = await this.productUnitSwitch.isChecked();
        console.log(`Current Switch Status: ${isCheckedBefore ? 'ON' : 'OFF'}`);
        await this.productUnitSwitch.click({ force: true });
        await this.page.waitForTimeout(1000);
    }
    async performEditUnit(){
        await this.page.waitForTimeout(3000);
        await this.productUnitEditIcon.click();
        await this.productEditUnitNameInput.fill('');
        await this.productEditUnitNameInput.fill('1');
        await this.productUnitSaveBtn.click();
    }

    async perfomeDeleteUnit(){
        await this.page.waitForTimeout(3000);
        await this.productUnitDeleteIcon.click({timeout: 1000});
        await this.productUnitDeleteBtn.click();


    }
}

