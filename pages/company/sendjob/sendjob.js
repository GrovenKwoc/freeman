// pages/company/sendjob/sendjob.js
import { SendJob } from './sendjob-model.js'
const sendJob = new SendJob()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    working_years: null,
    picker: ['1年以下', '1~2年', '2~3年','3~5年','5年以上'],
    edu: null,
    eduPicker: ['初中以下', '高中/中专', '大专及以上', '研究生', '博士及以上'],
    pay_type: null,
    payPicker: ['月付', '季付', '半年付', '其它'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      working_years: e.detail.value
    })
  },
  PickerChangeEdu(e) {
    console.log(e);
    this.setData({
      edu: e.detail.value
    })
  },
  PickerChangePay(e) {
    console.log(e);
    this.setData({
      pay_type: e.detail.value
    })
  },
  formSubmit(d) {
    let data = d.detail.value
    //判空处理
    data.work_year = this.data.picker[this.data.working_years]
    data.edu = this.data.eduPicker[this.data.edu]
    data.pay_type = this.data.pay_type
  
    // 提交参数
    sendJob.save(data,(res)=>{
      if(res.data.code == 1){
        wx.showToast({
          title: res.data.info,
        })
        setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        })
      } else {
        wx.showToast({
          title: res.data.info,
          icon: 'none'
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

  }
})