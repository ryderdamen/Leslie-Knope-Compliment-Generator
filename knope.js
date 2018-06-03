// knope.js - generates a compliment
const animals = require('./animals.json')
const adjectives = require('./adjectives.json')

module.exports = {
	getCompliment : function (name) {
		// Choose a random animal and adjective from the list
		adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
		animal = animals[Math.floor(Math.random() * animals.length)]
		return name + ', you ' + adjective + ' ' + animal + '.'
	}
}