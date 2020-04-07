import { Base } from '../../utils/base.js'

class Category extends Base {
  constructor() {
    super()
  }

  getList(page, callBack) {
    var params = {
      'url': '/post?page='+ page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Category }