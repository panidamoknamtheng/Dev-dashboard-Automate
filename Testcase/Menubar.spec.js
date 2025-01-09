const { expect } = require('@playwright/test');
const { test } = require('../pagefixtures/pagefixtures');
const { LoginPage } = require('../page-Object/loginPage');
const { MenuBar } = require('../page-Object/MenuBar');

test.beforeEach(async ({ page }) => {
    const menuBar = new MenuBar(page);
    await menuBar.goto();
    await menuBar.performLogin(); // Perform login once before each test
});

test('Menu-dashboard', async ({ page }) => {
    const menuBar = new MenuBar(page);
    // ตรวจสอบว่าหน้าหลังการล็อกอินมีองค์ประกอบของ Dashboard
    await menuBar.performMenudashboard();
    const dashboardSelector = '#dashboard';
    await expect(page.locator(dashboardSelector)).toBeVisible();
});

test('Menu-transaction', async ({ page }) => {
    const menuBar = new MenuBar(page);
    // ตรวจสอบรายงานประวัติการขาย
    await menuBar.performMenutransactionBtn();
    const transactionSelector = '#transaction';
    await expect(page.locator(transactionSelector)).toBeVisible();
});

test('Menu-currentbill', async ({ page }) => {
    const menuBar = new MenuBar(page);
    // ตรวจสอบรายงานบิลที่เปิดอยู่
    await menuBar.performMenucurrentbillBtn();
    const currentbillSelector = '#currentbill';
    await expect(page.locator(currentbillSelector)).toBeVisible();
});

test('Menu-grabReport', async ({ page }) => {
    const menuBar = new MenuBar(page);
    // ตรวจสอบรายงาน ​Grab
    await menuBar.performMenugrabReportBtn();
    const grabReportSelector = '#grabReportMenu';
    await expect(page.locator(grabReportSelector)).toBeVisible();
});

test('Menu-promotionReport', async ({ page }) => {
    const menuBar = new MenuBar(page);
    // ตรวจสอบรายงาน ​Grab
    await menuBar.performMenupromotionReportBtn();
    const promotionReportSelector = '#txtSalesPromotionReport';
    await expect(page.locator(promotionReportSelector)).toBeVisible();
});

test('Menu-salesReport', async ({ page }) => {
    const menuBar = new MenuBar(page);
    await test.step('Open Sales Report Dropdown', async () => {
        await menuBar.performMenusalesReportDropdownBtn();
        const salesReportDropdownSelector = '#salesReportDropdown';
        await expect(page.locator(salesReportDropdownSelector)).toBeVisible();
    });
    await test.step('Verify Sales Report by Date', async () => {
        const salesReportByDateSelector = '#reportSalesReportByDate'; // รายงานยอดขายสินค้าตามวัน
        await expect(page.locator(salesReportByDateSelector)).toBeVisible();
    });
    await test.step('Verify Sales Report by Bill', async () => {
        const salesReportByBillSelector = '#reportSalesReportByBill'; // รายงานยอดขายตามรายละเอียดบิล
        await expect(page.locator(salesReportByBillSelector)).toBeVisible();
    });
    await test.step('Verify Sales Quantity Summary by Product', async () => {
        const salesQuantitySummaryByProductReportSelector = '#reportSalesQuantitySummaryByProductReport'; // รายงานยอดขายตามสินค้า
        await expect(page.locator(salesQuantitySummaryByProductReportSelector)).toBeVisible();
    });
    await test.step('Verify Sales report by Product (PLU)', async () => {
        const QuantitySummaryByPLUReportSelector = '#reportQuantitySummaryByPLUReport'; // รายงานยอดขายสินค้าตามขนาดบรรจุ
        await expect(page.locator(QuantitySummaryByPLUReportSelector)).toBeVisible();
    });
    await test.step('Verify Sales By Add-on Report', async () => {
        const reportOptionalReportSelector = '#reportOptionalReport'; // รายงานยอดขายสินค้าตามตัวเลือก
        await expect(page.locator(reportOptionalReportSelector)).toBeVisible();
    });
    await test.step('Verify Sales By Channels Report', async () => {
        const SalesChannelsReportSelector = '#reportSalesChannelsReport'; // รายงานยอดขายตามช่องทางการขาย
        await expect(page.locator(SalesChannelsReportSelector)).toBeVisible();
    });

});