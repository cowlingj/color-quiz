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

  reader.question('identify the following color: \'#XXXXXX\'', function (answer) {
    console.log(answer)
  })
})