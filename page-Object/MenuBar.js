const { expect } = require('@playwright/test');

const expectMenuText = {
    "dashboard": { "Eng": "Dashboard", "Thai": "รายงานสรุป" },
    "transaction": { "Eng": "Transactions", "Thai": "ประวัติการขาย" },
    "currentbill": { "Eng": "Current Bill", "Thai": "บิลที่เปิดอยู่" },
    "grabReportMenu": { "Eng": "Grab Report  new", "Thai": "รายงาน Grab   new" },
    "SalesPromotionReport": { "Eng": "Promotion Report  new", "Thai": "รายงานโปรโมชัน  new" },
    //การขาย
    "SalesReportByDate": { "Eng": "Sales by Date", "Thai": "ยอดขายสินค้าตามวัน" },
    "SalesReportByBill": { "Eng": "Sales by Bill Detail", "Thai": "ยอดขายตามรายละเอียดบิล" },
    "SalesQuantitySummaryByProductReport": { "Eng": "Sales by Product", "Thai": "ยอดขายตามสินค้า" },
    "QuantitySummaryByPLUReport": { "Eng": "Sales by Product (PLU)", "Thai": "ยอดขายสินค้าตามขนาดบรรจุ" },
    "reportOptionalReport": { "Eng": "Sales by Add-on", "Thai": "ยอดขายตามตัวเลือก" },
    "reportSalesChannelsReport": { "Eng": "Sales by Channels", "Thai": "ยอดขายตามช่องทางการขาย" },
    "reportNonSellingProduct": { "Eng": "Non Selling Products", "Thai": "สินค้าที่ไม่มีการขาย" },
    "reportSalesSummaryByCategoryReport": { "Eng": "Sales by Category", "Thai": "การขายแยกตามกลุ่มสินค้า" },
    "reportPaymentReport": { "Eng": "Payment", "Thai": "การชำระเงิน" },
    "reportDrawerReport": { "Eng": "Drawer", "Thai": "ปิดรอบการขาย" },
    "reportVoidBillReport": { "Eng": "Void bill", "Thai": "ยกเลิกการขาย" },
    "reportCashInOutReport": { "Eng": "Cash In-Out", "Thai": "นำเงินเข้า-นำเงินออก" },
    "reportTableAmount": { "Eng": "Table Usage total", "Thai": "สถิติการใช้โต๊ะ" },
    "reportOptionSalesByCostMenu": { "Eng": "Cost By Add-on", "Thai": "ต้นทุนตามตัวเลือก" },
    //คลังสินค้า
    "reportStockInByListReport": { "Eng": "Stock In by Product", "Thai": "รับสินค้าเข้าแสดงรายการ" },
    "reportStockOutByListReport": { "Eng": "Stock Out by Product", "Thai": "จ่ายสินค้าออกแสดงรายการ" },
    "reportNonAdjustStockProductReport": { "Eng": "Unadjusted Stock", "Thai": "สินค้าที่ยังไม่ปรับปรุงสต๊อก" },
    "reportExportProductReport": { "Eng": "Export Products", "Thai": "ส่งออกรายการสินค้า" },
    "inventoryInventoryReport": { "Eng": "Inventory Summary", "Thai": "สินค้าคงเหลือตาม SKU" },
    "inventoryInventoryReportByPLU": { "Eng": "PLU Inventory Report", "Thai": "สินค้าคงเหลือตามขนาดบรรจุ" },
    "inventoryInventoryReportBySerial": { "Eng": "Serial No. Inventory Report", "Thai": "สินค้ามี Serial No." },
    "inventoryInventoryReportByLessStock": { "Eng": "Low Stock Report", "Thai": "สินค้าเหลือน้อย" },
    "inventoryInventoryReportByOutOfStock": { "Eng": "Out of Stock Report", "Thai": "สินค้าหมด" },
    "inventoryOptionSalesByDateMenu": { "Eng": "Add-on Category Sales By Date", "Thai": "การสั่งกลุ่มตัวเลือกตามวัน" },
    //ภาษี
    "reportSalesTaxReport": { "Eng": "Sales Tax", "Thai": "สรุปภาษีขาย" },
    //"reportNewPaymentReport": { "Eng": "Tax Invoice", "Thai": "บิลที่ออกใบกำกับภาษี" }, ขึ้นเฉพาะร้านที่เชื่อม flow account 
    "reportTaxBillSalesMenu": { "Eng": "Sales for Tax Invoice Bills", "Thai": "สรุปการขายเฉพาะสินค้ามีภาษี" },
    //พนักงาน
    "reportSalesSummaryByCashierReport": { "Eng": "Sales by Cashiers", "Thai": "ยอดขายแยกตามพนักงาน" },
    "reportTimesheetReport": { "Eng": "Timesheet", "Thai": "ชั่วโมงการทำงาน" },
    //เครื่อง Order
    "orderDeviceSalesSummaryByOrderReport": { "Eng": "By Order Device", "Thai": "ยอดขายสินค้า" },
    "orderDeviceSalesSummaryProductByOrderReport": { "Eng": "By Product", "Thai": "สินค้าขายได้" },
    "orderDeviceVoidBillByOrderReport": { "Eng": "Void bill", "Thai": "ยกเลิกการขายสินค้า" },
    //สินค้า
    "productProduct": { "Eng": "Product", "Thai": "สินค้า" },
    "productCategory": { "Eng": "Category", "Thai": "กลุ่มสินค้า" },
    "productUnit": { "Eng": "Unit", "Thai": "หน่วยบรรจุ" },
    "productOptional": { "Eng": "Add-on", "Thai": "ตัวเลือกเสริม" },
    "productTxtOptionCategory": { "Eng": "Add-on Category", "Thai": "กลุ่มตัวเลือก" },
    "productDeliveryManagement": { "Eng": "Product Delivery Management  new", "Thai": "จัดการเมนูเดลิเวอร์รี่  new" },
    "productSalesChannels": { "Eng": "Sales Channels  new", "Thai": "ช่องทางการขาย  new" },
    //การจัดการสต๊อกเเละคลัง
    "inventoryStockInDocument": { "Eng": "Stock-In", "Thai": "รับสินค้าเข้า" },
    "inventoryStockOutDocument": { "Eng": "Stock-Out", "Thai": "จ่ายสินค้าออก" },
    "inventoryAdjustStockDocument": { "Eng": "Adjust Stock", "Thai": "ปรับปรุงสต๊อก" },
    "inventoryCheckStockDoc": { "Eng": "Check Stock", "Thai": "ตรวจนับสินค้า" },
    "inventoryStockMovement": { "Eng": "Stock Movements", "Thai": "ความเคลื่อนไหวสินค้า" },
    "productImportProductTxt": { "Eng": "Import Product", "Thai": "นำเข้ารายการสินค้า" },
    //การโอนและรับระหว่างสาขา
    "inventoryTransferOutMenu": { "Eng": "Transfer-Out", "Thai": "โอนสินค้าระหว่างสาขา" },
    "inventoryTransferInMenu": { "Eng": "Transfer-In", "Thai": "รับสินค้าระหว่างสาขา" },
    "inventoryTransferReportMenu": { "Eng": "Transfer and Receipt", "Thai": "การโอนและรับสินค้า" },
    "shop": { "Eng": "Shop and Branch", "Thai": "ร้านค้าและสาขา" },
    "promotion": { "Eng": "Promotion  new", "Thai": "โปรโมชัน  new" },
    //สั่งอาหารด้วยตนเอง
    "smartSettingTitle": { "Eng": "Menu Setting", "Thai": "ตั้งค่าแสดงเมนูสินค้า" },
    "settingKiosk": { "Eng": "Set Up Kiosk  Smart+", "Thai": "ปรับแต่งหน้า Kiosk  Smart+" },
    "settingQrOrder": { "Eng": "Set Up QR Order  Smart+", "Thai": "ปรับแต่งหน้า QR Order  Smart+" },
    //สมาชิก
    "memberMenu": { "Eng": "Member", "Thai": "สมาชิก" },
    "reportPhoneReportMenu": { "Eng": "Sales By Customer", "Thai": "ยอดใช้จ่ายตามลูกค้า" },
    "memberCRM": { "Eng": "Silom CRM", "Thai": "ระบบสมาชิก" },
    //Setting
    "settingLanguage": { "Eng": "Language & Timezone", "Thai": "ภาษาและโซนเวลา" },
    "settingPayment": { "Eng": "Payment", "Thai": "การชำระเงิน" },
    "settingCashier": { "Eng": "Cashier", "Thai": "พนักงาน" },
    "settingPermission": { "Eng": "User Permission", "Thai": "สิทธิการเข้าถึง" },
    "settingDeliveryProviders": { "Eng": "Delivery Providers", "Thai": "รายชื่อผู้ให้บริการเดลิเวอรี่" },
    //การจัดการร้านค้า
    "settingUser": { "Eng": "Main account", "Thai": "บัญชีร้านค้า" },
    "settingShop": { "Eng": "Shop", "Thai": "ร้านค้า" },
    "settingAdministratorTools": { "Eng": "Administrator tools", "Thai": "เครื่องมือสำหรับผู้ดูแลระบบ" },
    "settingMenuSetting": { "Eng": "E-Menu Setting (CRM)", "Thai": "ตั้งค่า E-Menu (CRM)" },
    "settingSilomLineAlert": { "Eng": "Silom Smart Connect", "Thai": "Silom Smart Connect" }

};

exports.MenuBar = class MenuBar {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.theHeaderAccountBtn = page.locator('#theHeaderAccount');
        this.theHeaderAccAvatarThaiOption = page.locator('#theHeaderAccThaiLabel');
        this.selectShopDropdown = page.locator('#selectShopDropdown');
        this.menuSelectors = [
            { id: '#dashboard', key: 'dashboard' },
            { id: '#transaction', key: 'transaction' },
            { id: '#currentbill', key: 'currentbill' },
            { id: '#grabReportMenu', key: 'grabReportMenu' },
            { id: '#txtSalesPromotionReport', key: 'SalesPromotionReport' },
            { id: '#reportSalesReportByDate', key: 'SalesReportByDate' },
            { id: '#reportSalesReportByBill', key: 'SalesReportByBill' },
            { id: '#reportSalesQuantitySummaryByProductReport', key: 'SalesQuantitySummaryByProductReport' },
            { id: '#reportQuantitySummaryByPLUReport', key: 'QuantitySummaryByPLUReport' },
            { id: '#reportOptionalReport', key: 'reportOptionalReport' },
            { id: '#reportSalesChannelsReport', key: 'reportSalesChannelsReport' },
            { id: '#reportNonSellingProduct', key: 'reportNonSellingProduct' },
            { id: '#reportSalesSummaryByCategoryReport', key: 'reportSalesSummaryByCategoryReport' },
            { id: '#reportPaymentReport', key: 'reportPaymentReport' },
            { id: '#reportDrawerReport', key: 'reportDrawerReport' },
            { id: '#reportVoidBillReport', key: 'reportVoidBillReport' },
            { id: '#reportCashInOutReport', key: 'reportCashInOutReport' },
            { id: '#reportTableAmount', key: 'reportTableAmount' },
            { id: '#reportOptionSalesByCostMenu', key: 'reportOptionSalesByCostMenu' },
            { id: '#reportStockInByListReport', key: 'reportStockInByListReport' },
            { id: '#reportStockOutByListReport', key: 'reportStockOutByListReport' },
            { id: '#reportNonAdjustStockProductReport', key: 'reportNonAdjustStockProductReport' },
            { id: '#reportExportProductReport', key: 'reportExportProductReport' },
            { id: '#inventoryInventoryReport', key: 'inventoryInventoryReport' },
            { id: '#inventoryInventoryReportByPLU', key: 'inventoryInventoryReportByPLU' },
            { id: '#inventoryInventoryReportBySerial', key: 'inventoryInventoryReportBySerial' },
            { id: '#inventoryInventoryReportByLessStock', key: 'inventoryInventoryReportByLessStock' },
            { id: '#inventoryInventoryReportByOutOfStock', key: 'inventoryInventoryReportByOutOfStock' },
            { id: '#inventoryOptionSalesByDateMenu', key: 'inventoryOptionSalesByDateMenu' },
            { id: '#reportSalesTaxReport', key: 'reportSalesTaxReport' },
            //{ id: '#reportNewPaymentReport', key: 'reportNewPaymentReport' },
            { id: '#reportTaxBillSalesMenu', key: 'reportTaxBillSalesMenu' },
            { id: '#reportSalesSummaryByCashierReport', key: 'reportSalesSummaryByCashierReport' },
            { id: '#reportTimesheetReport', key: 'reportTimesheetReport' },
            { id: '#orderDeviceSalesSummaryByOrderReport', key: 'orderDeviceSalesSummaryByOrderReport' },
            { id: '#orderDeviceSalesSummaryProductByOrderReport', key: 'orderDeviceSalesSummaryProductByOrderReport' },
            { id: '#orderDeviceVoidBillByOrderReport', key: 'orderDeviceVoidBillByOrderReport' },
            { id: '#productProduct', key: 'productProduct' },
            { id: '#productCategory', key: 'productCategory' },
            { id: '#productUnit', key: 'productUnit' },
            { id: '#productOptional', key: 'productOptional' },
            { id: '#productTxtOptionCategory', key: 'productTxtOptionCategory' },
            { id: '#productDeliveryManagement', key: 'productDeliveryManagement' },
            { id: '#productSalesChannels', key: 'productSalesChannels' },
            { id: '#inventoryStockInDocument', key: 'inventoryStockInDocument' },
            { id: '#inventoryStockOutDocument', key: 'inventoryStockOutDocument' },
            { id: '#inventoryAdjustStockDocument', key: 'inventoryAdjustStockDocument' },
            { id: '#inventoryCheckStockDoc', key: 'inventoryCheckStockDoc' },
            { id: '#inventoryStockMovement', key: 'inventoryStockMovement' },
            { id: '#productImportProductTxt', key: 'productImportProductTxt' },
            { id: '#shop', key: 'shop' },
            { id: '#promotion', key: 'promotion' },
            { id: '#smartSettingTitle', key: 'smartSettingTitle' },
            { id: '#settingKiosk', key: 'settingKiosk' },
            { id: '#settingQrOrder', key: 'settingQrOrder' },
            { id: '#memberMenu', key: 'memberMenu' },
            { id: '#reportPhoneReportMenu', key: 'reportPhoneReportMenu' },
            { id: '#memberCRM', key: 'memberCRM' },
            { id: '#settingLanguage', key: 'settingLanguage' },
            { id: '#settingPayment', key: 'settingPayment' },
            { id: '#settingCashier', key: 'settingCashier' },
            { id: '#settingPermission', key: 'settingPermission' },
            { id: '#settingDeliveryProviders', key: 'settingDeliveryProviders' },
            { id: '#settingUser', key: 'settingUser' },
            { id: '#settingShop', key: 'settingShop' },
            { id: '#settingAdministratorTools', key: 'settingAdministratorTools' },
            { id: '#settingMenuSetting', key: 'settingMenuSetting' },
            { id: '#settingSilomLineAlert', key: 'settingSilomLineAlert' }
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
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 10000 });
        await this.selectShopDropdown.selectOption('Para - บางหว้า 🏠'); // Open the dropdown เลือกสาขา
        await this.page.waitForSelector('#dashboard', { state: 'visible', timeout: 3000 });
    }


    async toggleLanguage(language) {
        if (language === 'Thai') {
            await this.theHeaderAccountBtn.click();
            await this.theHeaderAccAvatarThaiOption.click();
        } else if (language === 'Eng') {
            // No action needed as English is the default language
        } else {
            throw new Error(`Unsupported language: ${language}`);
        }
    }

    async verifyMenuTexts(language = 'Eng') {
        for (const menu of this.menuSelectors) {
            const element = this.page.locator(menu.id);
            await element.waitFor({ state: 'visible', timeout: 3000 });
            const text = await element.textContent();
            

            const expectedText = expectMenuText[menu.key]?.[language];
            if (!expectedText) {
                throw new Error(`No expected text found for key ${menu.key} in language ${language}`);
            }

            if (text.trim() !== expectedText) {
                throw new Error(`Menu text mismatch for ${menu.id}: Expected "${expectedText}", but got "${text.trim()}"`);
            }
        }
    }
};
