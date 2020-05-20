import { Base } from '../../../utils/base.js'

class Record extends Base {
  constructor() {
    super()
  }

  getInfo(id, callBack) {
    var params = {
      'url': '/apply/info/' + id,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

  sendDelivery(data, callBack) {
    var params = {
      'url': '/post_apply',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Record }