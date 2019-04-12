module.exports = (options, app) => {
  return async function forbidIp(ctx,next) {
    var forbidips = options.forbidips;
    var clientIp = ctx.request.ip;
    var hasIp=forbidips.some(function(val){
      if (val == clientIp) {
        return true;
      }
    })
    if (hasIp) {
      ctx.status = 403;
      ctx.body='您的ip已经被屏蔽'
    }else {
      await next();
    }
  }
};
















// module.exports = (options, app) => {
//     return async function forbidIp(ctx,next) {
//       var forbidip = '127.0.0.2';
//       if (ctx.request.ip == forbidip) {
//         ctx.status = 403;
//         ctx.body = '您的ip已经被屏蔽'
//       } else {
//         await next();
//       }
      
//     }
//   };