Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*轮播图 */
    imgUrls: [
      'http://att.enshi.cn/2019/0801/1564651486917.jpg',       'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564733373993&di=9dfcdf1a2bdc93fcf484b1f6d3570b8d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc9f13a73ecf3d9268779858e7d5059f412b5fbdf84978-jBW5cS_fw658',
    'http://www.mdjxxn.cn/uploadfile/2017/0916/20170916032639914.jpg',
    'http://imgwww.heiguang.net/uploadfile/2019/0315/20190315023458169.jpg',
    'http://img.juimg.com/tuku/yulantu/130527/235099-13052FF40287.jpg',
    'http://pic6.wed114.cn/20180529/2018052914121304132604.jpg'
    ],
    /*底部展示图 */
    item_pic:[
      {
        img: 'http://img1.ph.126.net/tJFxsx0DK0_aWDWcEeEvUQ==/6630184857861826216.jpg', 
        title: '2月第2季 Golden ladies',
        day:'2019.02.14'},
      { img: 'http://qnm.hunliji.com/o_1d2hk1dvf107u9lq118p4vl5lt9c.jpg?imageView2/2/w/680%7Cwatermark/1/image/aHR0cDovL3FucGljLmh1bmxpamkuY29tL3dhdGVybWFyay5wbmc=/dx/20/dy/20/dissolve/80',
        title: '3月第1季 Golden ladies',
        day: '2019.03.23'},
      { img: 'http://pic6.wed114.cn/20181227/2018122710360521786102.jpg',
        title: '4月第2季 Golden ladies',
        day: '2019.04.24'},
      { img: 'http://5b0988e595225.cdn.sohucs.com/images/20181107/f3bc79ef2d3a42d88ff627cd76e9ce65.jpeg',
        title: '5月第1季 Golden ladies',
        day: '2019.05.14'},
      { img: 'http://pic6.wed114.cn/20190117/2019011714035328287337.jpg',
        title: '6月第4季 Golden ladies',
        day: '2019.06.26'},
      { img: 'http://www.xrphoto.com/uploads/allimg/190308/1-1Z30Q61956.jpg',
        title: '7月第2季 Golden ladies',
        day: '2019.07.28'},
      { img: 'http://pic6.wed114.cn/20190117/2019011712484167745996.jpg',
        title: '8月第1季 Golden ladies',
        day: '2019.08.1'},
      { img: 'http://wx1.sinaimg.cn/large/724c5f41gy1g1zv96o3rvj20u01904qt.jpg',
        title: '8月第2季 Golden ladies',
        day: '2019.08.14'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    'new':'../images/new.png',
    'photo': '../images/photo.png',
    'home': '../images/home.png',
    'messages': '../images/message.png',
    'main':'../images/main.jpg',
    /*'item_pic': ['http://i4.szhomeimg.com/o/2016/08/14/08141425315815187.JPG'],*/
   /* 'item_date': '2018.08.10',*/
    /*'item_content': '8月第2季 Golden ladies',*/
    'footer_pic':'../images/footer.jpg',
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg'

  },
  zaixian: function () {
    wx.navigateTo({
      url: '../zaixian/zaixian',
    })
  },
  show:function(){
    wx.navigateTo({
      url: '../show/show',
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18875766716',
    })
  },
  huodongyemian:function(){
    wx.navigateTo({
      url: '../huodong/huodong',
    })
  },
   
  new:function(){
      wx.navigateTo({
        url: '../new/new',
      })
  },
  photo: function () {
    wx.navigateTo({
      url: '../photo/photo',
    })
  },
  home: function () {
    wx.navigateTo({
      url: '../home/home',
    })
  },
  youhui: function () {
    wx.navigateTo({
      url: '../youhui/youhui',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})