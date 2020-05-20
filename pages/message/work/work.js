//index.js
//获取应用实例
import { Index } from './work-model.js'
var home = new Index();
const app = getApp()
var page = 1
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    typeId: 150,
    scrollLeft: 0,
    types: ['全部','待面试','被录用','不合适'],
    DataArr: [],
    scrollTop: 0,
    starTime: 0, //开始时间 点击事件
    isLoad: false,
    viewModal: false
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    this._loadData(e.currentTarget.dataset.id)
  },
  //滑动切换同步导航菜单
  swiperTab(e){
    // this.setData({
    //   TabCur: e.detail.current,
    //   titleInfo: this.data.types[e.detail.current],
    //   scrollLeft: (e.detail.current - 1) * 60,
    //   DataArr: []
    // })
    // this._loadData();
  },
  //初始化加载一次
  onLoad: function () {
    this._loadData(0)
  },
  myevent(e){
    this.setData({
      viewModal: e.detail.viewModal
    })
  },
   //加载数据
  _loadData:function(type){
    let params = {status:type}
    home.getDataList(params,(res) => {
      let data = res.data.data
      this.setData({
        DataArr: data,
        isLoad:true
      })
    })
  },
  //上拉加载
  onReachBottom(){
    let that = this
    // 显示加载图标
    this.setData({
      isLoad: true
    })
    setTimeout(function(){
      //加载数据
      that._loadData();
    },1500)
   
    // 隐藏加载框
    this.setData({
      isLoad: false
    })
  },
  //加载更多
  loadMore(){
    this.onReachBottom()
  },
  //下拉刷新
  onPullRefresh(){

  },
  //返回顶部
  goTop(e) {
    let timeStarp = e.timeStamp
    if (timeStarp - this.data.starTime < 300) {
      this.setData({
        scrollTop: 0
      })
    }
    this.setData({
      starTime: timeStarp
    })
  },
  hideModal(){
    this.setData({
      viewModal: false
    })
  },
  goDetail(e){
    let id = e.currentTarget.dataset.id
    wx.redirectTo({
      url: '/pages/work/record/record?id=' + id,
    })
  }
})
