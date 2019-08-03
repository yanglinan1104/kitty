// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'head':'../images/home1.jpg',
    'center': '../images/home2.jpg',
    'footer': ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724273623&di=3f0725431f2236d8cfffc514c8b35c57&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2046702942%2C2985526414%26fm%3D214%26gp%3D0.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724354830&di=bcf95e9de98c4936ba818747b26a45f9&imgtype=0&src=http%3A%2F%2F408.s21i-2.faidns.com%2F2232408%2F2%2FABUIABACGAAg8c6VnAUo3peEGDDYBDiQAw.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724354825&di=0892f95ad0fa489ba7944744e50bca63&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201601%2F27%2F20160127162334_nVjUz.png',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724354823&di=39c418417a99ec590ae4a67ac25335aa&imgtype=0&src=http%3A%2F%2Fimgwww.heiguang.net%2Ff%2F2012%2F1203%2F20121203095349655.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724354820&di=7b2f0c05051547223ea3ae2dbbaa7655&imgtype=0&src=http%3A%2F%2Fci.xiaohongshu.com%2F8c9db7a0-ada7-4b8c-b112-b56871d1f482%40r_640w_640h.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724354812&di=568e55709302294cb54b921bc3d547fb&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F23%2F1462719923167.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724354812&di=a9529e6b64976d43a3ca87f4673612bb&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01388f561f74a932f875570102cf80.jpg'],
    'text_header':'kitty 婚纱摄影是由一群热爱摄影并具有多年行业经验的有活力、时尚的年轻人组成。摄影以专业从事摄影行业的连锁经营发展道路观，历经多年耕耘，步履扎实，稳健发展，在秦皇岛摄影行业具有较强的影响力。致力于更广阔的前景开发。',
    'text_style':'kitty 摄影风格：',
    'text_content':'唯美、时尚、个性、典雅、并附有剧情式拍摄手法，努力为您打造专属您私人订制的风格，留住精彩瞬间。',
    'address':'地址：xxxxxxxxx婚纱摄影',
    'phone':'联系电话：1233211234567',
    'time': '营业时间：8：00-18:00',
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg'

  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '1336555987',
    })
  },
  zaixian: function () {
    wx.navigateTo({
      url: '../zaixian/zaixian',
    })
  },
  huodong: function () {
    wx.navigateTo({
      url: '../hdbb/hdbb',
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