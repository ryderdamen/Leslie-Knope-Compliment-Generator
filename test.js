const knope = require('./knope.js')

// Test one compliment
var compliment = knope.getCompliment('Ann')
console.log(compliment)

// Test two compliments
var compliment = knope.getCompliment('Ann', 2)
console.log(compliment)

// Test three compliments without an oxford comma
var compliment = knope.getCompliment('Ann', 3, false)
console.log(compliment)

// Test a random number of compliments
var compliment = knope.getCompliment('Ann', 'random', false)
console.log(compliment)

// Test a compliment with alliteration
var compliment = knope.getComplimentWithAlliteration('Ann')
console.log(compliment)

// Test an official compliment
var compliment = knope.getOfficialCompliment('Ann')
console.log(compliment)