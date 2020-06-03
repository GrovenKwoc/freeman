import { Base } from '../../../utils/base.js'

class Edit extends Base {
  constructor() {
    super()
  }


  getUserInfo(callBack) {
    var params = {
      'url': '/my_info',
      'type': 'post',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

  saveInfo(data, callBack) {
    var params = {
      'url': '/my/save',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Edit }