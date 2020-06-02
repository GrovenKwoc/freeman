// pages/startup/start.js
import { Start } from './start-model.js'
var startModel  = new Start();
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    type: 1
  },
  goBack(){
    wx.navigateBack({
      delta: 1
    })
  },
  job() {
    let params = {
      'type': 1
    }
    startModel.switchUser(params, (res) => {
      console.log(res.data)
    })
    wx.setStorageSync('userType', 1)
    wx.setStorageSync('isLogin', false)
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  hir() {
    let params = {
      'type': 2
    }
    startModel.switchUser(params,(res)=>{
      console.log(res.data)
    })
    wx.setStorageSync('userType', 2)
    wx.setStorageSync('isLogin', false)
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let type = wx.getStorageSync('userType')
    console.log(type)
    this.setData({
      'type': !type ? 0 : type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})