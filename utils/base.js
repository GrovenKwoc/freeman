import {
  Config
} from './config.js';

class Base {

  constructor() {
    this.baseRequestUrl = Config.restUrl;
  }

  request(params, noRefetch) {
    var that = this
    var url = encodeURI(this.baseRequestUrl + params.url)
    if (!params.type) {
      params.type = 'GET'
    }

    wx.request({
      url: url,
      method: params.type,
      header: {
        'content-type': 'application/json;',
        'token': wx.getStorageSync('token')
      },
      data: params.data,
      success: function(res) {
        var code = res.statusCode.toString()
        var startChar = code.charAt(0)

        if (startChar == '2') {
          params.sCallBack && params.sCallBack(res)
        } else {
          if (code == '401') {
            if (!noRefetch) {
              that._refetch(praams)
            }
          }
          if (noRefetch) {
            params.eCallback && params.eCallback(res.data)
          }
        }

        // 增加全局拦截器 处理token过期重新登陆
        if (res.data.error_code == 20003) {
          wx.showModal({
            content: '登陆超时,请重新登陆',
          })
        } else {}
      },
      fail: function(err) {
        console.log(err)
      }
    })
  }

  _refetch(params) {
    var token = new Token()
    token.getTokenFromServer((token) => {
      this.request(params, true)
    })
  }
}

export {
  Base
}