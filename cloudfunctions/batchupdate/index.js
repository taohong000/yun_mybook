const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('mybook').where({
      _openid: 'ouyEa0b7uuFpJDQ-b7AVCngPeUsk'
    })
      .update({
        data: {
          price: '100'
        },
      })
  } catch (e) {
    console.error(e)
  }
}