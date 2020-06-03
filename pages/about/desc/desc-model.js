import { Base } from '../../../utils/base.js'

class Desc extends Base {

  constructor() {
    super()
  }

  saveDesc(data, callBack) {
    var params = {
      'url': '/my/desc',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

}

export { Desc }