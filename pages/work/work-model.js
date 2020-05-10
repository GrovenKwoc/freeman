import { Base } from '../../utils/base.js'

class Index extends Base {
  constructor(){
    super()
  }
  
  getDataTypeList(callBack){
    var params = {
      'url': '/GetType',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }

  getDataList(callBack){
    var params = {
      'url': 'apply/list',
      sCallBack: function(res){
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export {Index}