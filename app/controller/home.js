'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.app.foo());
    console.log(this.ctx.getIp());
    console.log(this.ctx.request.foo())
    await this.ctx.render('index');
  }
}

module.exports = HomeController;
