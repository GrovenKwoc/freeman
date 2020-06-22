import { Base } from '../../../utils/base.js'

class SendJob extends Base {
  constructor() {
    super()
  }


  save(data, callBack) {
    var params = {
      'url': '/work/add',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { SendJob }