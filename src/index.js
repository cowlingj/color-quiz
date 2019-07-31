var request = require('request')

request('https://api.noopschallenge.com/hexbot', function (error, response, body) {
  console.log('error:', error)
  console.log('statusCode:', response && response.statusCode)
  console.log('body:', body)
})