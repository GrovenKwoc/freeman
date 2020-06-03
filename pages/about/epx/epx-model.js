import { Base } from '../../../utils/base.js'

class Epx extends Base {

  constructor() {
    super()
  }

  saveEpx(data,callBack) {
    var params = {
      'url': '/my/add_epx',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

}

export { Epx }