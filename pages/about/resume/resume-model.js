import { Base } from '../../../utils/base.js'

class Resume extends Base {
  constructor() {
    super()
  }


  getUserInfo(callBack) {
    var params = {
      'url': '/my/show_resume',
      'type': 'post',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

}

export { Resume }