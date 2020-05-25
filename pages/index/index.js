Page({
  data: {
    PageCur: 'index',
    userType: 2
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShow(){
  
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})