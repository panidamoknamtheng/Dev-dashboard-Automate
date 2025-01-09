const { expect } = require('@playwright/test');
//const expectMenuText ={
//    ""
 //   "grabReportMenu":{"Eng":"","Thai":""}
// }
exports.MenuBar = class MenuBar {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.altLang = 
        this.menuSelectors = [
            { id: '#dashboard', expectedText: 'รายงานสรุป'},
            { id: '#transaction', expectedText: 'ประวัติการขาย'},
            { id: '#currentbill', expectedText: 'บิลที่เปิดอยู่'},
            { id: '#grabReportMenu', expectedText: 'รายงาน Grab   new' },
            //{ id: '#grabReportMenu', expectedText: expectMenuText["grabReportMenu"][this.altLang] },
            { id: '#txtSalesPromotionReport', expectedText: 'รายงานโปรโมชัน  new' },
            { id: '#salesReportDropdown', expectedText: 'การขาย  ยอดขายสินค้าตามวัน  ยอดขายตามรายละเอียดบิล  ยอดขายตามสินค้า  ยอดขายสินค้าตามขนาดบรรจุ  ยอดขายตามตัวเลือก  ยอดขายตามช่องทางการขาย  สินค้าที่ไม่มีการขาย  การขายแยกตามกลุ่มสินค้า  การชำระเงิน  ปิดรอบการขาย  ยกเลิกการขาย  นำเงินเข้า-นำเงินออก  สถิติการใช้โต๊ะ  ต้นทุนตามตัวเลือก' },
            { id: '#reportSalesReportByDate', expectedText: 'ยอดขายสินค้าตามวัน' },
            { id: '#reportSalesReportByBill', expectedText: 'ยอดขายตามรายละเอียดบิล' },
            { id: '#reportSalesQuantitySummaryByProductReport', expectedText: 'ยอดขายตามสินค้า' },
            { id: '#reportQuantitySummaryByPLUReport', expectedText: 'ยอดขายสินค้าตามขนาดบรรจุ' },
            { id: '#reportOptionalReport', expectedText: 'ยอดขายตามตัวเลือก' },
            { id: '#reportSalesChannelsReport', expectedText: 'ยอดขายตามช่องทางการขาย' },
            { id: '#reportNonSellingProduct', expectedText: 'สินค้าที่ไม่มีการขาย' },
            { id: '#reportSalesSummaryByCategoryReport', expectedText: 'การขายแยกตามกลุ่มสินค้า' },
            { id: '#reportPaymentReport', expectedText: 'การชำระเงิน' },
            { id: '#reportDrawerReport', expectedText: 'ปิดรอบการขาย' },
            



        ];
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
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 3000 });

    }

    async verifyMenuTexts() {
        for (const menu of this.menuSelectors) {
            const element = this.page.locator(menu.id);
            await element.waitFor({ state: 'visible', timeout: 3000 });
            const text = await element.textContent();

            if (text.trim() !== menu.expectedText) {
                throw new Error(`Menu text mismatch for ${menu.id}: Expected "${menu.expectedText}", but got "${text.trim()}"`);
            }
        }
    }
};

