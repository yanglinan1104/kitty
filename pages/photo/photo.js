// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg',
    'header_pic':'../images/photo.jpg',
    list: [
      {
        item_pic: 'http://doc.xitaoinfo.com/doc_8b7ba67f3f9b44919068e9f77d106c9e.jpg',
        item_date: '2019.01.10',
        item_content: '韩式小清新 kitty',
      },
      {
        item_pic: 'http://5b0988e595225.cdn.sohucs.com/images/20180409/dbeb23b5f411438eacb23925439d28d8.jpeg',
        item_date: '2018.08.10',
        item_content: '复古园林风格 kitty',
      },
      {
        item_pic: 'http://5b0988e595225.cdn.sohucs.com/images/20180316/5d95d2a1399c46d4879cb345f996e1d2.jpeg',
        item_date: '2018.08.10',
        item_content: '国风腔调 kitty',
      },
      {
        item_pic: 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180806/565f74b270334a468c63802c5dede628.jpeg',
        item_date: '2018.08.10',
        item_content: '国风-简单 kitty',
      },
      {
        item_pic: 'http://n.sinaimg.cn/sinacn11/648/w640h808/20180714/aade-hfhfwmv2821332.jpg',
        item_date: '2018.08.10',
        item_content: '轻韩主义 kitty',
      },
      {
        item_pic: 'http://5b0988e595225.cdn.sohucs.com/images/20180316/9db94c014c174ddfa23f1bb6f209eb8b.jpeg',
        item_date: '2018.08.10',
        item_content: '轻韩主义-教堂 kitty',
      },
      {
        item_pic: 'http://www.sdannenberg.com/uploads/allimg/180113/1-1P1131103319B.jpg',
        item_date: '2018.08.10',
        item_content: '街拍风-转角遇到爱 kitty',
      },
      {
        item_pic: 'http://pic6.wed114.cn/20180703/2018070311392297866435.jpg',
        item_date: '2018.08.10',
        item_content: '街拍风-轻韩 kitty',
      },
      {
        item_pic: 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20181208/1b2a2d679013475d8af2de84cbbc74fb.jpeg',
        item_date: '2018.08.10',
        item_content: '爱的花园 kitty',
      },
      {
        item_pic: 'http://pic6.wed114.cn/20180629/2018062923190062402395.jpg',
        item_date: '2018.08.10',
        item_content: '校园 kitty',
      },
    ],
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18875766716',
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