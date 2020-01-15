//index.js
//获取应用实例
import { Index } from './index-model.js'
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
    types: [
      { id: "150", sort: "18768", title: "今日头条" },
      { id: "83", sort: "14464", title: "百度热搜" },
      { id: "58", sort: "36719", title: "微博" },
      { id: "7", sort: "34401", title: "知乎日报" },
      { id: "11", sort: "21131", title: "微信" },
      { id: "10", sort: "18410", title: "网易" },
      { id: "12", sort: "22935", title: "36Kr" },
      { id: "57", sort: "26266", title: "豆瓣" },
      { id: "1008", sort: "7225", title: "InfoQ最热" },
      { id: "148", sort: "14181", title: "抖音" },
      { id: "1027", sort: "1190", title: "金色财经" },
      { id: "164", sort: "5453", title: "新京报" }
    ],
    DataArr: [],
    scrollTop: 0,
    starTime: 0, //开始时间 点击事件
    isLoad: false,
    viewModal: false
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      typeId: e.currentTarget.dataset.tid,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    this._loadData();
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
    this._loadData()
  },
  myevent(e){
    console.log(e.detail.viewModal)
    this.setData({
      viewModal: e.detail.viewModal
    })
  },
   //加载数据
  _loadData:function(){
    let typeId = this.data.typeId
    home.getDataList(typeId,(res) => {
      let data = res.data.Data
      // for(let i=0; i<data.length;i++){
      //   console.log(data[i].Desc == ' ')
      // }
      this.setData({
        DataArr: data
      })
    })
  },
  _loadTypeData(){
    home.getDataTypeList((res) => {
      this.setData({
        moreTypes: res.data.Data
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
  gotoView(e){
    console.log(e)
    let url = e.currentTarget.dataset.url
    wx.redirectTo({
      url: '/pages/view/view?url=' + url,
    })
  }
})
