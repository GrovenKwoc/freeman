import {
  Detail
} from './detail-model.js'
var detailModel = new Detail();
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    list: [],
    load: true,
  },
  onLoad(option) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let id = option.id
    this.loadData(id)
  },
  onReady() {
    wx.hideLoading()
  },
  loadData(id) {
    let that = this
    detailModel.getInfo(id, (res) => {
      that.setData({
        list: res.data.data.data
      })
    })
  }
})