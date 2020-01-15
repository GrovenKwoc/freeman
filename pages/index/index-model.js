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

  getDataList(typeId,callBack){
    var params = {
      'url': '/GetAllInfoGzip?id=' + typeId,
      sCallBack: function(res){
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export {Index}