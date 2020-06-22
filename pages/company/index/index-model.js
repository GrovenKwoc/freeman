import { Base } from '../../../utils/base.js'

class Index extends Base {
  constructor() {
    super()
  }
  getSendStatus(callBack) {
    var params = {
      'url': '/work/send_status',
      'type': 'get',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Index }