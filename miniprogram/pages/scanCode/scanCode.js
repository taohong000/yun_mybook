// pages/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  scanCode(event) {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: (res) => {
        wx.cloud.callFunction({
          name: 'bookinfo',
          data: {
            isbn: res.result
          },
          success: (res) => {
            console.log(JSON.parse(res.result))
            const db = wx.cloud.database()
            db.collection('mybook').add({
              // data 字段表示需新增的 JSON 数据
              data: JSON.parse(res.result)
            })
              .then(res => {
                console.log(res)
              })
          },
          fail: (err) => {
            console.log(err)
          },
        })
      },
      fail: (err) => {
        console.log(err)
      },
    })
  }
})