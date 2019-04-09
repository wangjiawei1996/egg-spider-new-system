'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    this.ctx.body="新闻系统"
  }
}

module.exports = NewsController;
