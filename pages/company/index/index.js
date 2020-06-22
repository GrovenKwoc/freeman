// pages/company/index/index.js
import { Index } from './index-model.js'
const IndexModel = new Index()
const app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this._getSendRes()
    },
    moved: function () { },
    detached: function () { },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    isSendJob: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getSendRes() {
      IndexModel.getSendStatus((res) => {
        console.log(res)
      })
    },
    // 发布职位
    sendJob() {
      wx.navigateTo({
        url: '/pages/company/sendjob/sendjob',
      })
    }
  }
})
