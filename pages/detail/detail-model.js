import { Base } from '../../utils/base.js'

class Detail extends Base {
  constructor() {
    super()
  }

  getInfo(id, callBack) {
    var params = {
      'url': '/post/detail/?id='+ id,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Detail }