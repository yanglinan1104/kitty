// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'header_pic':'../images/main.jpg',
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg',
    list:[
      {
        item_pic: 'http://img0.imgtn.bdimg.com/it/u=3402259220,776684146&fm=26&gp=0.jpg',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
      {
        item_pic: 'http://www.haogu114.com/upload/jia/86d92d47a90b30db.jpg',
        item_date: '2018.09.5',
        item_content: '9月第1季 Golden ladies',
      },
      {
        item_pic: 'http://n.sinaimg.cn/front/w700h1050/20180307/VzSz-fxpwyhv5908643.jpg',
        item_date: '2018.10.6',
        item_content: '10月第1季 Golden ladies',
      },
      {
        item_pic: 'http://www.huaqiphoto.com/admin/ueditor/net/upload/2017-05-22/6af75531-b1f7-49e2-87bf-329c159dd1d7.jpg',
        item_date: '2018.11.4',
        item_content: '11月第1季 Golden ladies',
      },
      {
        item_pic: 'http://marry.qiniudn.com/o_1a3t2vcaa1d5u6mmfde71613acm.jpg?imageView/2/w/680%7Cwatermark/1/image/aHR0cDovL3FucGljLmh1bmxpamkuY29tL3dhdGVybWFyay5wbmc=/dx/20/dy/20/dissolve/80',
        item_date: '2018.11.25',
        item_content: '11月第2季 Golden ladies',
      },
      {
        item_pic: 'http://abbo.com.tw/admin/suggestions_images/suggestion_image_810014458375dd94d8ea.jpg',
        item_date: '2018.12.4',
        item_content: '12月第1季 Golden ladies',
      },
    ],
    
      // imgHttp: app.globalData.imgHttp,
      // list: [],
      //page: 1,
 },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18875766716',
    })
  },
  // lower: function (e) {
  //   var that = this
  //   that.setData({
  //     page: that.data.page + 1  //后台数据需要分页，每次加载一页
  //   })
  //   var page = that.data.page
  //   var pageSize = 2  //改变pageSize的值默认加载每页的数量
  //   wx.request({
  //     url: request_url,
  //     data: {
  //       'page': page,
  //       'pageSize': pageSize,
  //     },
  //     success: function (res) {
  //       if (res.data.code == 200) {
  //         let List = that.data.list
  //         let list = res.data.content
  //         for (var i = 0; i < list.length; i++) {
  //           List.push(list[i])  //循环遍历添加数组
  //         }
  //         that.setData({
  //           list: List,
  //         })
  //       }
  //       else {
  //         wx.showToast({
  //           title: '没有了哦',
  //           icon: 'loading'
  //         })
  //       }
  //     }
  //   })
  // },

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