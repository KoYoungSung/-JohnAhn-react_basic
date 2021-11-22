// process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';

const express = require('express')
const app = express()
const port = 5000
const { User } = require('./models/User');
const bodyParser = require('body-parser');
const config = require('./config/key')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ---- work laptop ------
const mongoose = require('mongoose');
console.log('#####')

console.log(process.env.NODE_ENV) // dev
console.log('config.mongoURI = ', config)
console.log('#####')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('connected!'))
  .catch(err => console.log(err))
// ---- work laptop ------


app.get('/', (req, res) => res.send('hello world'))
app.listen(port, () => console.log('port = ', port))

app.post('/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if (err) {
      return json({ success: false, err })
    }
    return res.status(200).json({
      success: true
    })
  })
})