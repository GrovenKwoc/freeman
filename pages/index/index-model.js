import { Base } from '../../utils/base.js'

class Index extends Base {
  constructor(){
    super()
  }
  
  getDataList(typeId,callBack){
    var params = {
      'url': '/index',
      sCallBack: function(res){
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export {Index}