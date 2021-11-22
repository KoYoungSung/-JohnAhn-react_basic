const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('hello world'))
app.listen(port, () => console.log('port = ', port))

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ko:ko123@cluster0.ba8dc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=> console.log('connected!'))
  .catch(err=>console.log(err))
