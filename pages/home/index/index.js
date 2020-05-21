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
        console.log(res.data.data)
        let data = res.data.data
        this.setData({
          DataArr: data
        })
      })
    },
    goDetail(e) {
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id
      })
    }
  }
})
// Page({
//   data: {
//     StatusBar: app.globalData.StatusBar,
//     CustomBar: app.globalData.CustomBar,
//     TabCur: 0,
//     typeId: 150,
//     scrollLeft: 0,
//     DataArr: [],
//     scrollTop: 0,
//     starTime: 0, //开始时间 点击事件
//     isLoad: false,
//     viewModal: false,
//     switerList: 1
//   },
//   tabSelect(e) {
//     this.setData({
//       TabCur: e.currentTarget.dataset.id,
//       typeId: e.currentTarget.dataset.tid,
//       scrollLeft: (e.currentTarget.dataset.id - 1) * 60
//     })
//     this._loadData();
//   },
//   //初始化加载一次
//   onLoad: function () {
//     this._loadData()
//   },
//   myevent(e){
//     console.log(e.detail.viewModal)
//     this.setData({
//       viewModal: e.detail.viewModal
//     })
//   },
//    //加载数据
//   _loadData:function(){
//     let typeId = this.data.typeId
//     home.getDataList(typeId,(res) => {
//       console.log(res.data.data)
//       let data = res.data.data
//       // for(let i=0; i<data.length;i++){
//       //   console.log(data[i].Desc == ' ')
//       // }
//       this.setData({
//         DataArr: data
//       })
//     })
//   },
//   _loadTypeData(){
//     home.getDataTypeList((res) => {
//       this.setData({
//         moreTypes: res.data.Data
//       })
//     })
//   },
//   //上拉加载
//   onReachBottom(){
//     let that = this
//     // 显示加载图标
//     this.setData({
//       isLoad: true
//     })
//     setTimeout(function(){
//       //加载数据
//       that._loadData();
//     },1500)

//     // 隐藏加载框
//     this.setData({
//       isLoad: false
//     })
//   },
//   //加载更多
//   loadMore(){
//     this.onReachBottom()
//   },
//   //下拉刷新
//   onPullRefresh(){

//   },
//   //返回顶部
//   goTop(e) {
//     let timeStarp = e.timeStamp
//     if (timeStarp - this.data.starTime < 300) {
//       this.setData({
//         scrollTop: 0
//       })
//     }
//     this.setData({
//       starTime: timeStarp
//     })
//   },
//   hideModal(){
//     this.setData({
//       viewModal: false
//     })
//   },
//   gotoView(e){
//     console.log(e)
//     let url = e.currentTarget.dataset.url
//     wx.navigateTo({
//       url: '/pages/view/view?url=' + url,
//     })
//   },
//   selectBtn(e){
//     console.log(e.currentTarget.dataset.Index)
//     // 业务代码 Todo
//     // 请求首页列表接口 更新查询的列表记录
//   },
//   goLocaltion(){
//     wx.navigateTo({
//       url: '/pages/indexes/indexes'
//     })
//   },
//   goDetail(e) {
//     let id = e.currentTarget.dataset.id
//     wx.navigateTo({
//       url: '/pages/detail/detail?id='+id
//     })
//   }
// })