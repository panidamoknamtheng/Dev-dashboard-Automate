const { expect } = require('@playwright/test');

exports.MenuBar = class MenuBar {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('#email-input');
        this.passwordField = page.locator('#password-input');
        this.singinBtn = page.locator('#sign-in-button');
        this.closeBtn = page.locator('#silomConnectQRModalFooterCheckbox');
        this.transactionBtn = page.locator('#transaction');
        this.currentbillBtn = page.locator('#currentbill');
        this.grabReportBtn = page.locator('#grabReportMenu');
        this.promotionReportBtn = page.locator('#txtSalesPromotionReport');
        this.salesReportDropdownBtn = page.locator('#salesReportDropdown');
        this.reportSalesReportByDateBtn = page.locator('#reportSalesReportByDate');
        this.reportSalesReportByBillBtn = page.locator('#reportSalesReportByBill');
        this.reportSalesReportByBillBtn = page.locator('#reportSalesReportByBill');
        this.reportSalesQuantitySummaryByProductReportBtn = page.locator('#reportSalesQuantitySummaryByProductReport');
        this.reportQuantitySummaryByPLUReportBtn = page.locator('#reportQuantitySummaryByPLUReport');
        this.reportOptionalReportBtn = page.locator('#reportOptionalReport');
        this.reportSalesChannelsReportBtn = page.locator('#reportSalesChannelsReport');

    }

    async goto() {
        await this.page.goto('https://silompos-dev.web.app/login');
    }

    async performLogin() {
        await this.emailField.fill('panida.2554@hotmail.com');
        await this.passwordField.fill('panida092');
        await this.singinBtn.click();
        // Wait for the checkbox to be visible before clicking it
        await this.page.waitForSelector('#silomConnectQRModalFooterCheckbox', { state: 'visible', timeout: 10000 });
        await this.closeBtn.click();
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 3000 });
    }

    async performMenudashboard() {
        // Assumes the user is already logged in
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 3000 });
    }

    async performMenutransactionBtn() {
        // Click the transaction button and wait for the transaction section to be visible
        await this.transactionBtn.click();
        await this.page.waitForSelector('#transaction', { state: 'visible', timeout: 3000 });
    }

    async performMenucurrentbillBtn() {
        await this.currentbillBtn.click();
        await this.page.waitForSelector('#currentbill', { state: 'visible', timeout: 3000 });
    }

    async performMenugrabReportBtn() {
        await this.grabReportBtn.click();
        await this.page.waitForSelector('#grabReportMenu', { state: 'visible', timeout: 3000 });
    }

    async performMenupromotionReportBtn() {
        await this.promotionReportBtn.click();
        await this.page.waitForSelector('#txtSalesPromotionReport', { state: 'visible', timeout: 3000 });
    }

    async performMenusalesReportDropdownBtn() {
        await this.salesReportDropdownBtn.click();
        await this.page.waitForSelector('#salesReportDropdown', { state: 'visible', timeout: 3000 });
        await this.reportSalesReportByDateBtn.click();
        await this.page.waitForSelector('#reportSalesReportByDate', { state: 'visible', timeout: 3000 });
        await this.reportSalesReportByBillBtn.click();
        await this.page.waitForSelector('#reportSalesReportByBill', { state: 'visible', timeout: 3000 });
        await this.reportSalesQuantitySummaryByProductReportBtn.click();
        await this.page.waitForSelector('#reportSalesQuantitySummaryByProductReport', { state: 'visible', timeout: 3000 });
        await this.reportQuantitySummaryByPLUReportBtn.click();
        await this.page.waitForSelector('#reportQuantitySummaryByPLUReport', { state: 'visible', timeout: 3000 });
        await this.reportOptionalReportBtn.click();
        await this.page.waitForSelector('#reportOptionalReport', { state: 'visible', timeout: 3000 });
        await this.reportSalesChannelsReportBtn.click();
        await this.page.waitForSelector('#reportSalesChannelsReport', { state: 'visible', timeout: 3000 });


    }

};

