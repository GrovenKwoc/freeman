import { Base } from '../../../utils/base.js'

class My extends Base {
  constructor() {
    super()
  }

  updateInfo(data, callBack) {
    var params = {
      'url': '/my/update',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

  getUserInfo(data, callBack) {
    var params = {
      'url': '/my',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { My }