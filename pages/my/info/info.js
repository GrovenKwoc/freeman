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
    jobDate: null,
    jobDatePicker: [],
    payType: null,
    payTypePicker: [],
    dutyTime: null,
    dutyTimePicker: [],
    profession: [],
    operator: [],
    multiIndex: [0, 0, 0],
    date: '2020-3-20',
    region: ['河南省', '郑州市', '金水区'],
    imgList: [],
    modalName: null,
    textareaBValue: '',
    btnStatus: false,
    formEdit: true,
  },
  onLoad() {
    this.loadData()
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
  jobDatePickerChange(e) {
    this.setData({
      jobDate: e.detail.value
    })
  },
  payTypePickerChange(e) {
    this.setData({
      payType: e.detail.value
    })
  },
  dutyTimePickerChange(e) {
    this.setData({
      dutyTime: e.detail.value
    })
  },
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 2, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
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
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  ChooseProfession(e) {
    let items = this.data.profession;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      profession: items,
    })
  },
  ChooseOperator(e) {
    let items = this.data.operator;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      operator: items,
    })
  },
  // 点击修改按钮
  editBtn() {
    this.setData({
      btnStatus: true,
      formEdit: false
    })
  },
  cannelBtn() {
    this.setData({
      btnStatus: false,
      formEdit: true
    })
  },
  // 表单提交
  formSubmit(e) {
    // 获取表单值
    // console.log(e.detail.value)
    let fromData = e.detail.value
    // 条件判断

    // 提交数据
    let data = {
      'username': fromData.realname,
      'idCard': fromData.idcard,
      'years': fromData.jobDate,
      'pro': fromData.profession,
      'operator': fromData.operator,
      'expected_location': fromData.location,
      'pay_type': fromData.pay_type,
      'desc': fromData.desc,
      'duty_time': fromData.dutyTime
    }

    MyInfo.saveInfo(data, (res) => {
      console.log(res.data)
      if (res.data.code == 1) {
        wx.showToast({
          title: res.data.info,
        })
        this.setData({
          btnStatus: false,
          formEdit: true
        })
      } else {
        wx.showToast({
          title: res.data.info,
          icon: 'none'
        })
      }
    })
  }
})