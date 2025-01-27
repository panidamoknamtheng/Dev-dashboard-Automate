const { expect } = require('@playwright/test');

exports.AddOn = class AddOn {

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
        this.productOptionalBtn = page.locator('#productOptional');
        this.productOptionAddBtn = page.locator('#productOptionAddButton');

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
        await this.productOptionalBtn.click();
    }
    async performAddOnSuccess(){
        await this.page.waitForTimeout(3000);
        await this.productOptionAddBtn.click();

    }
}