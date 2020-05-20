import { Base } from '../../../utils/base.js'

class Company extends Base {
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
      'url': '/memberInfo/save',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Company }