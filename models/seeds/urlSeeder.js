const db = require('../../config/mongoose')
const urlSchema = require('../url')

db.once('open', () => {
  urlSchema.create({
    originUrl: 'https://www.google.com.tw/',
    shortenUrl: 'https://bit.ly/3wPZLfb'
  },
  {
    originUrl: 'https://indd.adobe.com/embed/0829b9d0-905d-4403-9611-425b247a1256?startpage=1&allowFullscreen=true',
    shortenUrl: 'https://bit.ly/dbwdemo'
  }).then(() => {
    console.log('urlSeeder is done')
    return db.close()
  }).then(() => {
    console.log('mongodb is closed')
  })
})
