import {
  Record
} from './record-model.js'
var recordModel = new Record();
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    vo: [],
    load: true
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
    recordModel.getInfo(id, (res) => {
      console.log(res.data.data)
      that.setData({
        vo: res.data.data
      })
    })
  },
  sendBtn() {
    let that = this
    let params = {
      'cid': that.data.vo.companys.id,
      'job_id': that.data.vo.id
    }
    // detailModel.sendDelivery(params, (res) => {
    //   let d = res.data
    //   if (d.code == 1) {
    //     wx.showToast({
    //       title: d.info,
    //     })
    //   } else if (d.error_code == 20003) {
    //     wx.showModal({
    //       content: d.msg,
    //       showCancel: false,
    //       success(res) {
    //         if (res.confirm) {
    //           wx.switchTab({
    //             url: '/pages/my/my'
    //           })
    //         }
    //       }
    //     })
    //   } else {
    //     wx.showToast({
    //       title: d.info,
    //       icon: 'none'
    //     })
    //   }
    // })
  },
  goDetail(e){
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/office/detail/detail?id=' + id
    })
  }
})