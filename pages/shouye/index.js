// pages/shouye/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:[{
      id:0,
      name:'首页推荐',
      isact:true
    },
    {
      id:1,
      name:'热门推荐',
      isact:false
    },
    {
      id:2,
      name:'其他推荐',
      isact:false
    }]
  },
  hand(e){
    const {index}=e.detail;
    let {tab} =this.data;
    console.log(this.data)
    tab.forEach((v,i,a) => i===index?v.isact=true:v.isact=false);
    this.setData({
        tab
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