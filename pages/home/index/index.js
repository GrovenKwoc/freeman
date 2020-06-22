//index.js
//获取应用实例
import {
  Index
} from './index-model.js'
var home = new Index();
const app = getApp()
var page = 1
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    typeId: 150,
    scrollLeft: 0,
    DataArr: [],
    scrollTop: 0,
    starTime: 0, //开始时间 点击事件
    isLoad: false,
    viewModal: false,
    switerList: 1
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      this._loadData()
    },
    moved: function() {},
    detached: function() {},
  },
  methods: {
    //加载数据
    _loadData: function() {
      let typeId = this.data.typeId
      home.getDataList(typeId, (res) => {
        let data = res.data.data
        this.setData({
          DataArr: data
        })
      })
    },
    goDetail(e) {
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/office/detail/detail?id=' + id
      })
    },
    selectBtn() {
      // 显示筛选条件
    }
  }
})