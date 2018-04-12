class Base{

  constructor(){

  }

  request(params,){
    wx.request({
      url: '',
      data:null,
      method: '',
      header:null,
      success: function (res) {
        callBack(res);
      },
      fail:function(err){

      }
    })
  }






}