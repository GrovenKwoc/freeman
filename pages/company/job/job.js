// pages/company/index/index.js
import { Job } from './job-model.js'
const JobModel = new Job()
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
      this._loadData()
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
    TabCur: 0,
    scrollLeft: 0,
    tabList: ['发布中','已下线']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      })
    },
    offline(e) {
      let id = e.currentTarget.dataset.id
      console.log(id)
    },
    _loadData() {
      JobModel.getList(1,(res)=>{
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
