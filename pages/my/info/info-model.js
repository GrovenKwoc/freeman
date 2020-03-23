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
}

export { Info }