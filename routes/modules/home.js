const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
  const originUrl = req.query.originUrl
  console.log('原始網址==', originUrl)

  // 取得5碼亂碼，且不重複

  // 組合成新網址，並轉址
})



module.exports = router
