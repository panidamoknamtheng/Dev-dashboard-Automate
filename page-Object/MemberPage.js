const { expect } = require('@playwright/test');

exports.MemberPage = class MemberPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('#email-input');
        this.passwordField = page.locator('#password-input');
        this.singinBtn = page.locator('#sign-in-button');
        this.selectShopDropdown = page.locator('#selectShopDropdown');
        this.memberDropdownBtn = page.locator('#memberDropdown');
        this.memberMenuBtn = page.locator('#memberMenu');
        this.memberAddBtn = page.locator('#memberAddButton');
        this.createMemberFirstname = page.locator('#createMemberFirstnameInput');
        this.createMemberLastname = page.locator('#createMemberLastnameInput');
        this.createMemberSex = page.locator('#createMemberSexSelect');
        this.createMemberTel = page.locator('#createMemberTelInput');
        this.ChooseDateofBirth = page.locator('#datepicker__q9lo0pcax');
        this.createMemberSave = page.locator('#createMemberSaveButton');
        this.createMemberConfirm = page.locator('#createMemberConfirmButton');
        this.createValidationAlert = page.locator('#createMemberValidationAlert');
        this.searchMemberBtn = page.locator('#memberSearchInput');
        this.memberSearchInputBtn = page.locator('#memberSearchInput');
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
    }

    async performMember() {
        await this.memberDropdownBtn.click();
        await this.memberMenuBtn.click();
    }

    async searchMember() { 
        await this.page.waitForTimeout(500);
        await this.searchMemberBtn.fill('ปริญญา');
        await this.memberSearchInputBtn.click();
        await this.page.waitForTimeout(1000);
    }

    async addMemberSuccess() {
        await this.memberAddBtn.click();
        await this.createMemberFirstname.fill('ปริญญา', { state: 'visible', timeout: 2000 });
        await this.createMemberLastname.fill('ชาญศิริ', { state: 'visible', timeout: 2000 });
        await this.createMemberSex.selectOption('Male');
        await this.createMemberTel.fill('0917642835', { state: 'visible', timeout: 2000 });
        const dateOfBirthInput = this.page.locator('input[placeholder="Choose Date of Birth"]');
        await dateOfBirthInput.click();
        await this.page.waitForSelector('.vd-picker__body', { state: 'visible', timeout: 5000 });
        while (!(await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(10);
        }
        await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).click();
        while (!(await this.page.locator('.vd-picker__controls-month').filter({ hasText: 'January' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(500);
        }
        await this.page.locator('.vd-picker__table-day', { hasText: '22' }).click();
        await this.createMemberSave.click();
        await this.page.waitForTimeout(50);
        await this.createMemberConfirm.click();
    }

    async addMemberWithoutFirstname() {
        await this.memberAddBtn.click();
        await this.createMemberFirstname.fill('', { state: 'visible', timeout: 2000 });
        await this.createMemberLastname.fill('ชาญศิริ', { state: 'visible', timeout: 2000 });
        await this.createMemberSex.selectOption('Male');
        await this.createMemberTel.fill('0917642835', { state: 'visible', timeout: 2000 });
        const dateOfBirthInput = this.page.locator('input[placeholder="Choose Date of Birth"]');
        await dateOfBirthInput.click();
        await this.page.waitForSelector('.vd-picker__body', { state: 'visible', timeout: 5000 });
        while (!(await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(10);
        }
        await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).click();
        while (!(await this.page.locator('.vd-picker__controls-month').filter({ hasText: 'January' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(500);
        }
        await this.page.locator('.vd-picker__table-day', { hasText: '22' }).click();
        await this.createMemberSave.click();
        await this.page.waitForTimeout(50);
    }

    async addMemberWithoutLastname(){
        await this.memberAddBtn.click();
        await this.createMemberFirstname.fill('ปริญญา', { state: 'visible', timeout: 2000 });
        await this.createMemberLastname.fill('', { state: 'visible', timeout: 2000 });
        await this.createMemberSex.selectOption('Male');
        await this.createMemberTel.fill('0917642835', { state: 'visible', timeout: 2000 });
        const dateOfBirthInput = this.page.locator('input[placeholder="Choose Date of Birth"]');
        await dateOfBirthInput.click();
        await this.page.waitForSelector('.vd-picker__body', { state: 'visible', timeout: 5000 });
        while (!(await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(10);
        }
        await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).click();
        while (!(await this.page.locator('.vd-picker__controls-month').filter({ hasText: 'January' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(500);
        }
        await this.page.locator('.vd-picker__table-day', { hasText: '22' }).click();
        await this.createMemberSave.click();
        await this.page.waitForTimeout(50);
    }

    async addMemberWithoutSex(){
        await this.memberAddBtn.click();
        await this.createMemberFirstname.fill('ปริญญา', { state: 'visible', timeout: 2000 });
        await this.createMemberLastname.fill('ชาญศิริ', { state: 'visible', timeout: 2000 });
        await this.createMemberTel.fill('0917642835', { state: 'visible', timeout: 2000 });
        const dateOfBirthInput = this.page.locator('input[placeholder="Choose Date of Birth"]');
        await dateOfBirthInput.click();
        await this.page.waitForSelector('.vd-picker__body', { state: 'visible', timeout: 5000 });
        while (!(await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(10);
        }
        await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).click();
        while (!(await this.page.locator('.vd-picker__controls-month').filter({ hasText: 'January' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(500);
        }
        await this.page.locator('.vd-picker__table-day', { hasText: '22' }).click();
        await this.createMemberSave.click();
    }
    async addMemberWithoutTel(){
        await this.memberAddBtn.click();
        await this.createMemberFirstname.fill('ปริญญา', { state: 'visible', timeout: 2000 });
        await this.createMemberLastname.fill('ชาญศิริ', { state: 'visible', timeout: 2000 });
        await this.createMemberSex.selectOption('Male');
        await this.createMemberTel.fill('', { state: 'visible', timeout: 2000 });
        const dateOfBirthInput = this.page.locator('input[placeholder="Choose Date of Birth"]');
        await dateOfBirthInput.click();
        await this.page.waitForSelector('.vd-picker__body', { state: 'visible', timeout: 5000 });
        while (!(await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(10);
        }
        await this.page.locator('.vd-picker__controls-year').filter({ hasText: '2015' }).click();
        while (!(await this.page.locator('.vd-picker__controls-month').filter({ hasText: 'January' }).isVisible())) {
            await this.page.locator('.vd-picker__controls-prev').click();
            await this.page.waitForTimeout(500);
        }
        await this.page.locator('.vd-picker__table-day', { hasText: '22' }).click();
        await this.createMemberSave.click();
    }

}

