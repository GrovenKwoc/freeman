import { Base } from '../../../utils/base.js'

class Info extends Base {
  constructor() {
    super()
  }

  getInfo(callBack) {
    var params = {
      'url': '/memberInfo',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

  saveInfo(data, callBack) {
    var params = {
      'url': '/my/verify',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

  saveUploadImg(filePath, callBack){
    var params = {
      'url': '/upload/image',
      'type': 'post',
      'data': { filePath },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.upload(params);
  }
}

export { Info }