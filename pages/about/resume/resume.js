// pages/my/resume/resume.js
import { Resume } from './resume-model.js'
var ResumeModal = new Resume()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ResumeModal.getUserInfo((res)=>{
      let data = res.data
      this.setData({
        'info': data.data
      })
    })
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
  goEditHeader() {
    wx.redirectTo({
      url: '/pages/about/editheader/edit',
    })
  },
  goEpx() {
    wx.redirectTo({
      url: '/pages/about/epx/epx?rid=' + this.data.info.id,
    })
  },
  addDesc() {
    wx.redirectTo({
      url: '/pages/about/desc/desc?id=' + this.data.info.id,
    })
  }
})