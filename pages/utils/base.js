import {Config} from '../utils/config.js';
class Base{

  constructor(){
      this.baseRequestUrl = Config.restUrl;
  }

  request(params){
    var url = this.baseRequestUrl + params.url;
    if(!params.method){
      params.method = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.method,
      header:{
        'content-type': 'application/json', // 默认值
        'token':wx.getStorageSync('token')
      },
      success: function (res) {
        
        if (params.sCallBack){
          params.sCallBack(res.data);
        }

      },
      fail:function(err){
          console.log(err);
      }
    })
  }






}

export {Base};