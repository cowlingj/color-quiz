var request = require('request')
var readline = require('readline')

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

request('https://api.noopschallenge.com/hexbot', function (error, response, body) {
  console.log('error:', error)
  console.log('statusCode:', response && response.statusCode)
  console.log('body:', body)
  var response = JSON.parse(body) 
  var hex = response.colors[0].value
  console.log(hex)
})