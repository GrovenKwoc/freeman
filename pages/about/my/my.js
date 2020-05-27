import {
  My
} from './my-model.js'
var MyData = new My();
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
    userType: 1
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      // 请求用户接口 获取用户类型
      this._loadData()
      // let userType = wx.getStorageSync('userType')
      // if (userType) {
      //   let value = wx.getStorageSync('isLogin')

      //   this.setData({
      //     'userType': userType,
      //     'isLogin': value
      //   })
      // } else {
      //   // 未获取用户类型跳转到起始页
      //   wx.redirectTo({
      //     url: '/pages/home/startup/start'
      //   })
      // }
    },
    moved: function () { },
    detached: function () { },
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
     * 复制内容到剪切板 暂时未用到此方法
     */
    // CopyLink(e) {
    //   wx.setClipboardData({
    //     data: e.currentTarget.dataset.link,
    //     success: res => {
    //       wx.showToast({
    //         title: '已复制',
    //         duration: 1000,
    //       })
    //     }
    //   })
    // },
    // goPic(e) {
    //   //单击6次跳转到图片页
    //   let count = this.data.clickCount
    //   if (count >= 6) {
    //     wx.navigateTo({
    //       url: '/pages/picture/picture'
    //     })
    //     return false
    //   }
    //   count += 1
    //   this.setData({
    //     clickCount: count
    //   })
    //   console.log(count)

    // },
    /**
  * 进入我的收藏
  */
    toFor() {
      wx.showToast({
        title: '暂未开放',
      })
    },
    goToPage(e) {
      console.log(e)
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
          // 切换身份页
          wx.navigateTo({
            url: '/pages/company/job/job',
          })
          break;
      }
    },
    // 跳转企业认证页面
    goCertification() {
      wx:wx.redirectTo({
        url: '/pages/company/cert/cert'
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
              success: function (res) {
                var userInfo = res.userInfo
                //获取用户信息成功后发送code码及用户信息到后端接口换取登录态token
                wx.login({
                  success(res) {
                    if (res.code) {
                      //获取token
                      let params = {
                        'code': res.code,
                        'userInfo': userInfo,
                        'type': wx.getStorageSync('type') == '' ? 1 : wx.getStorageSync('type')
                      }
                      // console.log(params)
                      //return false
                      MyData.getToken(params, (res) => {
                        console.log(res)
                        let data = res.data
                        // 存储登陆态 token
                        if (data.code == 1) {
                          wx.setStorageSync('token', data.data)
                          // 设置一个全局登陆状态值
                          wx.setStorageSync('isLogin', true)
                          // 登陆成功后 刷新当前页面 Todo
                          //_this.attached()
                        }
                      })
                    } else {
                      console.log('登录失败！' + res.errMsg)
                    }
                  }
                })
              }
            })
          }
        }
      })
    }
  }
})

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     starCount: 0,
//     forksCount: 0,
//     visitTotal: 0,
//     starTime: 0,
//     clickCount: 0,
//     isLogin: false,
//     userType: 1
//   },
//   // 检测是否登陆
//   checkLogin(){
//     let value = wx.getStorageSync('isLogin')
//     if(!value){
//       wx.showToast({
//         title: '请先登陆',
//         icon: 'none'
//       })
//       return false
//     }
//     return true
//   },
//   // 跳转到我的简历页面  此处需要添加获取用户手机号码权限
//   myResume(){
//     if(this.checkLogin()){
//       wx.navigateTo({
//         url: '/pages/my/info/info'
//       })
//     }
//   },
//   /**
//    * 复制内容到剪切板 暂时未用到此方法
//    */
//   CopyLink(e) {
//     wx.setClipboardData({
//       data: e.currentTarget.dataset.link,
//       success: res => {
//         wx.showToast({
//           title: '已复制',
//           duration: 1000,
//         })
//       }
//     })
//   },
//   goPic(e) {
//     //单击6次跳转到图片页
//     let count = this.data.clickCount
//     if (count >= 6) {
//       wx.navigateTo({
//         url: '/pages/picture/picture'
//       })
//       return false
//     }
//     count += 1
//     this.setData({
//       clickCount: count
//     })
//     console.log(count)

//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function(options) {

//     // 如果登陆成功 则获取用户类型
//     let userType = wx.getStorageSync('userType')
//     if (userType) {
//       let value = wx.getStorageSync('isLogin')

//       this.setData({
//         'userType': userType,
//         'isLogin': value
//       })
//     } else {
//       // 未获取用户类型跳转到起始页
//       wx.reLaunch({
//         url: '/pages/startup/start'
//       })
//     }
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function() {

//   },
//   /**
//    * 进入我的收藏
//    */
//   toFor() {
//     wx.showToast({
//       title: '暂未开放',
//     })
//   },
//   // 企业信息
//   companyDetail() {
//     // wx.showToast({
//     //   title: '暂未开放',
//     // })
//     wx.navigateTo({
//       url: '/pages/my/company/company'
//     })
//   },
//   goToPage(e){
//     console.log(e)
//     let d = e.currentTarget.dataset.id
//     switch(d){
//       case '1':
//        wx.switchTab({
//          url: '/pages/work/work',
//        })
//       break;
//       case '2':
//       break;
//       case '3':
//       break;
//       case '4':
//       break;
//       case '5':
//       // 简历页面
//       wx.navigateTo({
//         url: '/pages/my/resume/resume',
//       })
//       break;
//     }
//   },
//   getInfo(){
//     var _this = this
//     // 查看是否授权
//     wx.getSetting({
//       success(res) {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称
//           wx.getUserInfo({
//             success: function (res) {
//               var userInfo = res.userInfo
//               //获取用户信息成功后发送code码及用户信息到后端接口换取登录态token
//               wx.login({
//                 success(res) {
//                   if (res.code) {
//                     //获取token
//                     let params = {
//                       'code': res.code,
//                       'userInfo': userInfo,
//                       'type': wx.getStorageSync('type') == '' ? 1 : wx.getStorageSync('type')
//                     }
//                    // console.log(params)
//                     //return false
//                     MyData.getToken(params, (res) => {
//                       let data = res.data
//                       // 存储登陆态 token
//                       if (data.code == 1) {
//                         wx.setStorageSync('token', data.data)
//                         // 设置一个全局登陆状态值
//                         wx.setStorageSync('isLogin', true)
//                         // 登陆成功后 刷新当前页面 Todo
//                         _this.onLoad()
//                       }
//                     })
//                   } else {
//                     console.log('登录失败！' + res.errMsg)
//                   }
//                 }
//               })
//             }
//           })
//         }
//       }
//     })
//   }
// })