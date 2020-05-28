var app = getApp();
Page({
  data: {
    PageCur: 'home',
    userType: 1
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onLoad(){

 
  },
  onShow(){
    let type = wx.getStorageSync('userType')
    console.log(type)
    console.log(this.data)
    if (type != null) {
      let pageCur = ''
      if (type == 2) {
        pageCur = 'index'
      } else {
        pageCur = 'home'
      }
      this.setData({
        'userType': type,
        'PageCur': pageCur
      })
    }
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})