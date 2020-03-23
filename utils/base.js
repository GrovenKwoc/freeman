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
        params.sCallBack && params.sCallBack(res)
      },
      fail:function(err){
        console.log(err)
      }
    })
  }
}

export { Base }