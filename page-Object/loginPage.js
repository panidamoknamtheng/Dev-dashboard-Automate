const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

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
    this.flashMessageforget = page.locator('#success');
  }

  async goto() {
    await this.page.goto('https://silompos-dev.web.app/login'); 
    //await this.page.goto('https://dashboard.silompos.app/login/'); //PROD
  }

  async performLoginSuccess(){
    await this.emailField.fill('panida.2554@hotmail.com');
    await this.passwordField.fill('panida092');
    await this.singinBtn.click();
  }

  async performLoginIncorrectpassword(){
    await this.emailField.fill('panida.2554@hotmail.com');
    await this.passwordField.fill('123456');
    await this.singinBtn.click();
  };

  async performLoginIncorrectEmail(){
    await this.emailField.fill('panida.55@gmail.com');
    await this.passwordField.fill('panida092');
    await this.singinBtn.click();
  };

  async performLoginempty(){
    await this.emailField.fill('');
    await this.passwordField.fill('');
    await this.singinBtn.click();
  };

  async performLoginncorrectemailorpassword(){
    await this.emailField.fill('panida.55@gmail.com');
    await this.passwordField.fill('123456');
    await this.singinBtn.click();
  };

  async performLoginforgotpasswordnormal(){
    await this.forgotpasswordBtn.click();
    await this.emailField.fill('panida.2554@hotmail.com');
    await this.resetpasswordBtn.click(); 
  }

  async performLoginforgotpasswordinvalidemail(){
    await this.forgotpasswordBtn.click();
    await this.emailField.fill('panida.55@gmail.com');
    await this.resetpasswordBtn.click();
  }

  async performLoginforgotpasswordempty(){
    await this.forgotpasswordBtn.click();
    await this.emailField.fill('');
    await this.resetpasswordBtn.click();
  }

  async performLoginforgotpasswordinvalidformatted(){
    await this.forgotpasswordBtn.click();
    await this.emailField.fill('55@gmail.');
    await this.resetpasswordBtn.click();
  }
};

 