const { expect } = require('@playwright/test');

exports.ShopPage = class ShopPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('#email-input');
        this.passwordField = page.locator('#password-input');
        this.singinBtn = page.locator('#sign-in-button');
        this.flashMessage = page.locator('#alert');
        this.forgotpasswordBtn = page.locator('#forget-password-text');
        this.resetpasswordBtn = page.locator('#reset-password-button');
        this.selectShopDropdown = page.locator('#selectShopDropdown');
        this.shopSettingDropdown = page.locator('#shopSettingDropdown');
        this.settingShop = page.locator('#settingShop');
        //this.LogoInputFile = page.locator('#shopSettingSelectedFileLabel');
        //this.filePath = page.locator('/Users/bluemurfs/Documents/Appication/Dev-dashboard-Automate/Img/jin-the-astronaut-bts-4k-wallpaper-uhdpaper.com-192@1@j.jpg')
        this.NameShop = page.locator('#shopSettingHeaderTitle');
        this.shopNameInput = page.locator('#shopSettingShopnameInput');
        this.BranchNameInput = page.locator('#shopSettingBrancenameInput');
        this.updateButton = page.locator('#shopSettingConfirmModalTrue');
        this.confirm = page.locator('#shopSettingConfirmModalSaveButton');
        this.flashMessageSuccess = page.locator('#shopSettingAlertSuccess');
        this.BusinessType = page.locator('#shopSettingBussinesstypeSelect');
        this.TaxIDInput = page.locator('#shopSettingTaxIDInput');
        this.checkboxisVAT = page.locator('#isVAT');
        this.SettingVatInput = page.locator('#shopSettingVatInput');
        this.ServiceChargeInput = page.locator('#shopSettingServiceChargeInput');
        this.SettingOpenTimePicker = page.locator('#shopSettingOpenTimePicker');
        this.SettingClosedTimePicker = page.locator('#shopSettingClosedTimePicker');
        this.SettingAddress1Input = page.locator('#shopSettingAddress1Input');
        this.SettingAddress2Input = page.locator('#shopSettingAddress2Input');

    }

    async goto() {
        await this.page.goto('https://silompos-dev.web.app/login');
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
    }

    async performShop() {
        await this.shopSettingDropdown.click();
        await this.settingShop.click();
    }

    async uploadFile(filePath) {
        await this.shopSettingDropdown.click();
        await this.settingShop.click({ state: 'visible', timeout: 3000 });
        await this.page.locator('#shopSettingSelectedFileLabel').click();
        await this.LogoInputFile.setInputFiles(filePath);
    }

    async saveShopName() {

        await this.page.waitForTimeout(5000);
        await this.shopNameInput.fill('');
        await this.shopNameInput.fill('Blue');
        await this.page.waitForFunction(
            (input) => input.value === 'Blue',
            await this.shopNameInput.elementHandle(),
            { timeout: 5000 }
        );
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });
    }

    async BranchName() {
        await this.page.waitForTimeout(5000);
        await this.BranchNameInput.fill('');
        await this.BranchNameInput.fill('แรก');
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });
    }

    async saveBusinessType() {
        await this.page.waitForTimeout(5000);
        await this.BusinessType.selectOption('General');
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });
    }

    async shopSettingTaxIDInput() {
        await this.page.waitForTimeout(5000);
        await this.TaxIDInput.fill('');
        await this.TaxIDInput.fill('123456789123');
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });
    }

    async saveVat() {
        await this.page.waitForTimeout(10000);
        const checkbox = this.checkboxisVAT;
        const isChecked = await checkbox.isChecked();
        if (isChecked) {
            await checkbox.uncheck({ force: true });
        } else {
            await checkbox.check({ force: true });
        }
        await this.SettingVatInput.fill('');
        await this.SettingVatInput.fill('5');
        await this.page.waitForTimeout(2000);
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });
    }

    async saveServiceChargeInput() {
        await this.page.waitForTimeout(5000);
        await this.ServiceChargeInput.fill('');
        await this.ServiceChargeInput.fill('10');
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });
    }

    async saveSettingTimePicker() {
        await this.page.waitForTimeout(5000);
        const openTimeScript = `document.querySelector('#shopSettingOpenTimePicker').removeAttribute('readonly'); 
        document.querySelector('#shopSettingOpenTimePicker').value = '10:00';`;
        await this.page.evaluate(openTimeScript);
        const openTimeValue = await this.page.locator('#shopSettingOpenTimePicker').inputValue();
        console.log(`Set Open Time: ${openTimeValue}`);
        const closeTimeScript = `document.querySelector('#shopSettingClosedTimePicker').removeAttribute('readonly'); 
        document.querySelector('#shopSettingClosedTimePicker').value = '21:00';`;
        await this.page.evaluate(closeTimeScript);
        const closeTimeValue = await this.page.locator('#shopSettingClosedTimePicker').inputValue();
        console.log(`Set Close Time: ${closeTimeValue}`);
        await this.page.waitForTimeout(2000);
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });
    }

    async saveAddress () {
        await this.page.waitForTimeout(5000);
        await this.SettingAddress1Input.fill('');
        await this.SettingAddress1Input.fill('ชั้น1 909 On Nut Rd, Suan Luang');
        await this.SettingAddress2Input.fill('');
        await this.SettingAddress2Input.fill('Bangkok 10250');
        await this.updateButton.click();
        await this.page.waitForSelector('#shopSettingConfirmModalSaveButton', { state: 'visible', timeout: 10000 });
        await this.confirm.click();
        await this.page.waitForSelector('#shopSettingAlertSuccess', { state: 'visible', timeout: 10000 });



    }


};
