// pages/huodong/huodong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'only_pic':'http://img0.imgtn.bdimg.com/it/u=405472601,4085428175&fm=26&gp=0.jpg',
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg'
  },
  zaixian: function () {
    wx.navigateTo({
      url: '../zaixian/zaixian',
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '133665497',
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