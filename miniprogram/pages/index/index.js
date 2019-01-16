const db = wx.cloud.database()
const book = db.collection('mybook')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('mybook').get({
        success: (res)=> {
          console.log(res.data)
          this.setData({
            bookList:res.data
          })
        }
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

  viewItem(event) {
    const id = event.target.dataset.id;
    wx.navigateTo({
      url: `../bookDetail/bookDetail?id=${id}`,
    })
  }
})