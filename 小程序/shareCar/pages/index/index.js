// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0
  },
  bindcontroltap: function (e) {
    console.log(e);
    switch (e.controlId) {
      case 1:
        this.movetoCenter();
        break;
      case 2:
        if (this.timer) {
          wx.navigateBack({
            delta: 1
          })
        }else {
          wx.scanCode({
            success: () => {
              wx.showLoading({
                title: '正在获取密码',
              })
              wx.request({
                url: 'https://www.easy-mock.com/mock/5921aa889aba4141cf295dd5/ofo/password',
                success: (res) => {
                  wx.hideLoading()
                  wx.redirectTo({
                    url: '/pages/scanResult/index?password=' + res.data.data.password + '&number=' + res.data.data.number,
                    success: () => {
                      wx.showToast({
                        title: '获取密码成功',
                        duration: 1000
                      })
                    }
                  })
                }
              })
            },
            fail: () => {
              console.log('fale')
            }
          })
        }
        break;
      case 5:
        wx.navigateTo({
          url: '../warn/index',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../my/index',
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = options.timer;
    var self = this;
    wx.getLocation({
      success: function(res) {
        self.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    });
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          controls: [{
            id: 1,
            iconPath: "/images/m.png",
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 80,
              left: 20
            },
            clickable: true
          }, {
            id: 2,
            iconPath: "/images/mm.png",
            position: {
              width: 100,
              height: 100,
              left: res.windowWidth / 2 - 45,
              top: res.windowHeight - 100
            },
            clickable: true
          }, {
            id: 3,
            iconPath: "/images/mmm.png",
            position: {
              width: 70,
              height: 60,
              top: res.windowHeight - 80,
              left: res.windowWidth - 70
            },
            clickable: true
          }, {
            id: 4,
            iconPath: "/images/mmmm.png",
            position: {
              width: 40,
              height: 40,
              left: 25,
              top: res.windowHeight - 135
            },
            clickable: true
            }, {
              id: 5,
              iconPath: "/images/require.png",
              position: {
                width: 40,
                height: 40,
                left: 25,
                top: res.windowHeight - 195
              },
              clickable: true
            }, {
              id: 6,
              iconPath: "/images/local.png",
              position: {
                width: 30,
                height: 50,
                left: res.windowWidth / 2 - 15,
                top: res.windowHeight / 2 - 50
              }
            }]
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  movetoCenter: function () {
    this.mapctx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapctx = wx.createMapContext("ofo-map");
    this.movetoCenter();
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