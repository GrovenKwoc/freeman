import { Base } from '../../../utils/base.js'

class Detail extends Base {
  constructor() {
    super()
  }

  getInfo(id, callBack) {
    var params = {
      'url': '/index/detail/'+id,
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

export { Detail }