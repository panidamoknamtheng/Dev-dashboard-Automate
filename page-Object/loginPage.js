const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailField = page.locator('#uid-2mw4odiazbc');
    this.passwordField = page.locator('#uid-xu17vk1rdk8');
    this.singinBtn = page.locator('.btn px-4 btn-success btn-block');
    
  }

  async goto() {
    await this.page.goto('https://silompos-dev.web.app/login');
  }

  async performLoginSuccess(){
    await this.emailField.fill('panida.2554@hotmail.com');
    await this.passwordField.fill('panida092');
    await this.singinBtn.click();
  }
};