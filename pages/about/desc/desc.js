// pages/about/desc/desc.js
import { Desc } from './desc-model.js'
var descModal = new Desc()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      this.setData({
        'id': options.id
      })
    } else {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      })
      setTimeout(function () {
        wx.navigateBack({
          delta: 1
        })
      }, 2000)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  formSubmit(e) {
    let formData = e.detail.value

    let params = {
      'desc': formData.desc,
      'id': this.data.id,
    }

    descModal.saveDesc(params, (res) => {
      let data = res.data
      if (data.code == 1) {
        wx.showToast({
          title: data.info,
          icon: 'none'
        })
        setTimeout(function () {
          wx.navigateBack({
            delta: 1
          })
        }, 2000)
      } else {
        wx.showToast({
          title: data.info,
          icon: 'none'
        })
      }
    })
  }
})