const request = require('request')
const namer = require('color-namer')

request('https://api.noopschallenge.com/hexbot', function (error, response, body) {
  
  const parsedBody = JSON.parse(body) 
  const hex = parsedBody.colors[0].value
  
  const names = namer(hex, { pick: ['html' ] })
  const answer = names.html[0]

  console.log("your color is: " + answer.hex + " (" + answer.name + ")")
})