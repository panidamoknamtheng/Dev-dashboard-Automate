const { test: base } = require('@playwright/test');
const { LoginPage } = require('../page-Object/loginPage');
const { MenuBar } = require('../page-Object/MenuBar');
const { Mainaccount } = require('../page-Object/Mainaccount');
const { ShopPage } = require('../page-Object/ShopPage');
const { MemberPage } = require('../page-Object/MemberPage');
const { Category } = require('../page-Object/Product/Category');

exports.test = base.extend({
    LoginPage : async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    MenuBar : async ({ page }, use) => {
        await use(new MenuBar(page));
    },
    Mainaccount : async ({ page }, use) => {
        await use(new Mainaccount(page));
    },
    ShopPage : async ({ page }, use) => {
        await use(new ShopPage(page));
    },
    MemberPage : async ({ page }, use) => {
        await use(new MemberPage(page));
    },
    Category : async ({ page }, use) => {
        await use(new Category(page));
    }

});