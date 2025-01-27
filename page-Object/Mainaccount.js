const { expect } = require('@playwright/test');

const expectMenuText = {
    "userJumbotronTitle": { "Eng": "Main account", "Thai": "บัญชีร้านค้า" },
    "userDetailTable": { "Eng": "Member infomation Shop Name-E-mailpanida.2554@hotmail.com", "Thai": "ข้อมูลสมาชิก ชื่อร้าน-อีเมล์panida.2554@hotmail.com" },
    "packageAndHistoryUlbar": { "Eng": "Current Package Purchase History", "Thai": "แพ็กเกจปัจจุบัน ประวัติการชำระเงิน" },
}

exports.Mainaccount = class Mainaccount {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.selectShopDropdown = page.locator('#selectShopDropdown');
        this.shopSettingDropdown = page.locator('#shopSettingDropdown');
        this.settingUser = page.locator('#settingUser');
        this.headerHelpButtonCloseSidebar = page.locator('#theHeaderHelpButton .close-sidebar-btn');
        this.userHelpButtonCloseSidebar = page.locator('#userHelpButton .close-sidebar-btn');
        this.menuSelectors = [
            { id: '#userJumbotronTitle', key: 'userJumbotronTitle' },
            { id: '#userDetailTable', key: 'userDetailTable' },
            { id: '#packageAndHistoryUlbar', key: 'packageAndHistoryUlbar' },
        ]
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
        await this.selectShopDropdown.selectOption({ label: 'Para - บางหว้า 🏠' });
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 6000 });
        await this.shopSettingDropdown.click();
        await this.settingUser.click({ state: 'visible', timeout: 3000 });
    }

    async verifyText(language = 'Eng') {
        for (const selector of this.menuSelectors) {
            const element = this.page.locator(selector.id);
            const expectedText = expectMenuText[selector.key][language];
            const actualText = await element.textContent();
            expect(actualText.trim()).toBe(expectedText);
        }

        // Close sidebar based on the language
        if (language === 'Thai') {
            await this.userHelpButtonCloseSidebar.click();
        }
    }
};