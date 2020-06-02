import {
  Info
} from './info-model.js'
var MyInfo = new Info();
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    info: [],
    operator: [],
    imgList: [],
    images: [], // 身份证正反面

  },
  onLoad() {
   // this.loadData()
  },
  loadData() {
    MyInfo.getInfo((res) => {
      let data = res.data.data
      console.log(data.info)
      this.setData({
        info: data.info,
        jobDatePicker: data.other.jobDate,
        dutyTimePicker: data.other.dutyTime,
        payTypePicker: data.other.payType,
        profession: data.other.profession,
        operator: data.other.operator
      })
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 2, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        //图片上传到服务器，返回图片url地址
        const tempFilePaths = res.tempFilePaths
        MyInfo.saveUploadImg(tempFilePaths[0],(res)=>{
          let resData = JSON.parse(res.data)
          if (resData.code == 1){
            this.setData({
              'images': this.data.images.concat(resData.data)
            })
          }
        })

        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  // 表单提交
  formSubmit(e) {
    // 获取表单值
    // console.log(e.detail.value)
    let fromData = e.detail.value
    // 条件判断
    if(fromData.realname == ''){
      wx.showToast({
        title: '真实名称不能为空',
        icon: 'none'
      })
      return false
    }
    if (fromData.mobile == '') {
      wx.showToast({
        title: '手机号码不能为空',
        icon: 'none'
      })
      return false
    }
    if (fromData.idcard == '') {
      wx.showToast({
        title: '身份证号不能为空',
        icon: 'none'
      })
      return false
    }
    if( this.data.images.length < 2){
      wx.showToast({
        title: '请上传身份证正反面照片',
        icon: 'none'
      })
      return false
    }

    // 提交数据
    let data = {
      'username': fromData.realname,
      'idCard': fromData.idcard,
      'mobile': fromData.mobile,
      'images': this.data.images
    }

    MyInfo.saveInfo(data, (res) => {
      
      if (res.data.code == 1) {
        wx.showToast({
          title: res.data.info,
          icon: 'none'
        })
        setTimeout(function(){
          wx.redirectTo({
            url: '/pages/about/my/my',
          })
        },2000)
      } else {
        wx.showToast({
          title: res.data.info,
          icon: 'none'
        })
      }
    })
  }
})