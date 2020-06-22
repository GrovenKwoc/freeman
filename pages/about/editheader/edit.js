// pages/about/editheader/edit.js
import { Edit } from './edit-model.js'
let EditModel = new Edit()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formType: 0,
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData()
  },
   _loadData(){
     EditModel.getUserInfo((res)=>{
      console.log(res)
      let data = res.data
      if(data.code == 1){
        this.setData({
          'info': data.data,
          'formType': 1
        })
      } else {
        this.setData({
          'formType': 0
        })
      }
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
  formSubmit(e){
    let fromData = e.detail.value
    // 条件判断
    console.log(fromData)
    // 提交数据
    let params = {
      'city': fromData.city,
      'job_status': fromData.job_status,
      'edu': fromData.edu,
      'email': fromData.email,
      'formType': fromData.formType,
      'job_type': fromData.job_type,
      'location': fromData.location,
      'mobile': fromData.mobile,
      'work_year': fromData.work_year,
    }

    EditModel.saveInfo(params,(res)=>{
      let data = res.data
      console.log(data)
      if(data.code == 1){
        wx.showToast({
          title: data.info,
          icon: 'none'
        })
        setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        },2000)
      } else {
        wx.showToast({
          title: data.info,
          icon: 'none'
        })
      }
    })
  }
})