import { Base } from '../../../utils/base.js'

class Job extends Base {
  constructor() {
    super()
  }

  getList(data, callBack) {
    var params = {
      'url': '/work/list',
      'type': 'post',
      'data': { data },
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Job }