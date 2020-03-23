//app.js
App({
  onLaunch: function() {
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
  },
  onLoad: function () {
    // 监测本地存储中是否存在用户类型，如果不存在 重定向到启动选择页面
    let userType = wx.getStorageSync('userType')
    if (!userType) {
      wx.reLaunch({
        url: '/pages/startup/start'
      })
    }
  },
  globalData: {
    userInfo: null,
  }
})