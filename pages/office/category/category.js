import {
  Category
} from './category-model.js'
var categoryModel = new Category();
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    list: [],
    load: true,
    page: 1
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    this.loadData()
  },
  loadData() {
    let that = this
    categoryModel.getList(that.data.page, (res)=>{
      console.log(res.data.data)
      that.setData({
        list: res.data.data
      })
    })
  },
  onReady() {
    wx.hideLoading()
  },
  goDetail(e) {
    let id = e.currentTarget.dataset.id
    console.log(id)

    wx.navigateTo({
      url: '/pages/detail/detail?id=1'
    })
  }
})