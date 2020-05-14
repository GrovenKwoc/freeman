import { Config } from './config.js';

class Base {

  constructor(){
    this.baseRequestUrl = Config.restUrl;
  }

  request(params){
    var url = encodeURI(this.baseRequestUrl + params.url)
    if(!params.type){
      params.type = 'GET'
    }

    wx.request({
      url: url,
      method: params.type,
      header:  {
        'content-type':'application/json;',
        'token': wx.getStorageSync('token')
      },
      data: params.data,
      success:function(res){
        // 增加全局拦截器 处理token过期重新登陆
        if(res.data.error_code == 20003){
          wx.showModal({
            content: '登陆超时,请重新登陆',
          })
          //清除local缓存
          wx.removeStorageSync('token')
          wx.removeStorageSync('isLogin')
        } else {
          params.sCallBack && params.sCallBack(res)
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  }
}

export { Base }