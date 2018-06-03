// knope.js - generates a compliment
const animals = require('./animals.json')
const adjectives = require('./adjectives.json')
const officialCompliments = require('./officialCompliments.json')

module.exports = {
	getCompliment : function (name) {
		// Choose a random animal and adjective from the list
		var adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
		var animal = animals[Math.floor(Math.random() * animals.length)]
		return name + ', you ' + adjective + ' ' + animal + '.'
	},
	getOfficialCompliment: function (name) {
		// Returns an official compliment a la Leslie Knope
		var compliment = officialCompliments[Math.floor(Math.random() * officialCompliments.length)]
		return name + compliment
	}
}