if (process.env.NODE_ENV === 'production') {
  console.log('111111111111')
  module.exports = require('./prod');
} else {
  console.log('2222222222222')
  module.exports = require('./dev');
}