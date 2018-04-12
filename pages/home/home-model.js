class Home{

  constructor(){

  }

  getBannerData(id,callBack){

    wx.request({
      url: 'http://www.tp5.com/index.php/api/v1.banner/getbanner/' + id,
      method:'GET',
      //微信服务器请求都是异步返回！！
      success: function (res) {
          callBack(res);
      }
    })

  }

}

export { Home };