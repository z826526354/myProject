// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      userUrl: "",
      nickName: "未登录"
    },
    actionText: "登录",
    btnType: "primary"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: {
            userUrl: res.data.userInfo.userUrl,
            nickName: res.data.userInfo.nickName
          },
          actionText: res.data.actionText,
          btnType: res.data.btnType
        })
      },
    })
  },

  login: function () {
    if (this.data.actionText == "登录") {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.setData({
                userInfo: {
                  userUrl: res.userInfo.avatarUrl,
                  nickName: res.userInfo.nickName
                },
                actionText: "退出登录",
                btnType: "warn"
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    userInfo: {
                      userUrl: res.userInfo.avatarUrl,
                      nickName: res.userInfo.nickName
                    }
                  },
                  actionText: "退出登录",
                  btnType: "warn"
                },
              })
            }
          })
          
        }
      })
    }else {
      wx.removeStorageSync("userInfo"),
      this.setData({
        userInfo: {
          userUrl: "",
          nickName: "未登录"
        },
        actionText: "登录",
        btnType: "primary"
      })
    }
  },

  movetoWallet: function () {
    wx.navigateTo({
      url: '../wallet/index',
    })
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