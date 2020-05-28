import { Base } from '../../../utils/base.js'

class Start extends Base {
  constructor() {
    super()
  }

  switchUser(data, callBack) {
    var params = {
      'url': '/my/switch',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Start }