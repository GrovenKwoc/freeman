import {
  My
} from './my-model.js'
var MyData = new My();
var app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    starTime: 0,
    clickCount: 0,
    isLogin: false,
    userType: 1,
    userInfo: {}
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      // 如果登陆成功 则获取用户类型
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.setData({
          'userType': userInfo.type,
          'isLogin': wx.getStorageSync('isLogin'),
          'userInfo': userInfo
        })
      }
    },
    moved: function() {},
    detached: function() {},
  },
  methods: {
    // 检测是否登陆
    checkLogin() {
      let value = wx.getStorageSync('isLogin')
      if (!value) {
        wx.showToast({
          title: '请先登陆',
          icon: 'none'
        })
        return false
      }
      return true
    },
    _loadData() {
      let _this = this
      let params = {
        token: wx.getStorageSync('token')
      }
      MyData.getUserInfo(params, (res) => {
        let data = res.data.data
        _this.setData({
          userType: data.type,
          isLogin: wx.getStorageSync('isLogin')
        })
        getApp().userInfo = res.data.data
      })
    },
    /**
     * 进入我的收藏
     */
    toFor() {
      wx.showToast({
        title: '暂未开放',
      })
    },
    goToPage(e) {
      let d = e.currentTarget.dataset.id
      switch (d) {
        case '1':
          wx.navigateTo({
            url: '/pages/message/work/work',
          })
          break;
        case '2':
          break;
        case '3':
          break;
        case '4':
          break;
        case '5':
          // 简历页面
          wx.navigateTo({
            url: '/pages/about/resume/resume',
          })
          break;
        case '6':
          // 切换身份页
          wx.navigateTo({
            url: '/pages/home/startup/start',
          })
          break;
        case '7':
          // 职位管理页
          wx.navigateTo({
            url: '/pages/company/job/job',
          })
          break;
      }
    },
    // 跳转企业认证页面
    goCertification() {
      wx.redirectTo({
        url: '/pages/company/cert/cert'
      })
    },
    // 跳转到个人认证页面
    goVerify() {
      wx.redirectTo({
        url: '/pages/about/info/info',
      })
    },
    getInfo() {
      var _this = this
      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                //更新用户信息
                //获取token
                let params = {
                  'userInfo': res.userInfo,
                  'type': wx.getStorageSync('userType') == '' ? 1 : wx.getStorageSync('userType')
                }
                MyData.updateInfo(params, (res) => {
                  wx.setStorageSync('isLogin', true)
                  wx.setStorageSync('userInfo', res.data.data)
                  _this.setData({
                    'userInfo': res.data.data,
                    'userType': res.data.data.type,
                    'isLogin': true
                  })
                })
              }
            })
          }
        }
      })
    }
  }
})