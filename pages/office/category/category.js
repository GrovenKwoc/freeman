import {
  Category
} from './category-model.js'
var categoryModel = new Category();
const app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    list: [],
    load: true,
    page: 1
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      wx.showLoading({
        title: '加载中...',
        mask: true
      });
      this.loadData()
    },
    moved: function () { },
    detached: function () { },
    ready: function () { 
      wx.hideLoading()
    },
  },
  methods: {
    loadData() {
      let that = this
      categoryModel.getList(that.data.page, (res) => {
        that.setData({
          list: res.data.data
        })
      })
    },
    goDetail(e) {
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/office/detail/detail?id=1'
      })
    }
  }
})