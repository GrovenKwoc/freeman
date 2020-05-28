//app.js
import {
  Token
} from 'utils/token.js'
App({
  onLaunch: function() {

    var token = new Token();
    token.verify()

    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })

    // 监测本地存储中是否存在用户类型，如果不存在 重定向到启动选择页面
    let userType = wx.getStorageSync('userType')
    if (!userType) {
      wx.redirectTo({
        url: '/pages/home/startup/start'
      })
    }
  },
  onLoad: function() {
    // 监测本地存储中是否存在用户类型，如果不存在 重定向到启动选择页面
    // let userType = wx.getStorageSync('userType')
    // console.log(userType)
    // if (!userType) {
    //   wx.reLaunch({
    //     url: '/pages/home/startup/start'
    //   })
    // }
  },
  globalData: {
    userInfo: null,
    isLogin: false
  }
})