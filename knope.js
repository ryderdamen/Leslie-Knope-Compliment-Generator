// knope.js - generates a compliment
const animals = require('./animals.json')
const adjectives = require('./adjectives.json')
const officialCompliments = require('./officialCompliments.json')

module.exports = {
	getCompliment : function (name, numAdjectives = 1, oxfordComma = true) {
		// Generates a compliment in a loop
		// Create a mutable adjective variable
		var mutableAdjectives = adjectives
		function generateCompliment(numAdjectives, oxfordComma) {
			adjective = ""
			let original_numAdjectives = numAdjectives
			while ( numAdjectives !== 0 ) {
				if ( numAdjectives == 1 ) {
					let newAdjective = mutableAdjectives[Math.floor(Math.random() * mutableAdjectives.length)]
					// Remove the adjective from the array
					let adjectiveIndex = mutableAdjectives.indexOf(newAdjective);
					if (adjectiveIndex !== -1) mutableAdjectives.splice(adjectiveIndex, 1);

					adjective = adjective + newAdjective
					if ( oxfordComma && original_numAdjectives != 1 ) {
						adjective = adjective + ','
					}
				}
				else {
					adjective = adjective + mutableAdjectives[Math.floor(Math.random() * mutableAdjectives.length)] + ', '
				}
				numAdjectives --
			}
			return adjective
		}
		// Choose a random animal and adjective from the list
		var adjective = ""
		if ( numAdjectives > 1 && numAdjectives < 5 ) { // Return 2-5 adjectives
			adjective = generateCompliment(numAdjectives, oxfordComma)
		}
		else if (numAdjectives == 'random') { // Get a random number of adjectives between 2-5
			rand = Math.floor(Math.random() * 5) + 1
			adjective = generateCompliment(rand, oxfordComma)
		}
		else { // Get just one
			adjective = mutableAdjectives[Math.floor(Math.random() * mutableAdjectives.length)]
		}
		var animal = animals[Math.floor(Math.random() * animals.length)]
		return name + ', you ' + adjective + ' ' + animal + '.'
	},
	getOfficialCompliment: function (name) {
		// Returns an official compliment a la Leslie Knope
		var compliment = officialCompliments[Math.floor(Math.random() * officialCompliments.length)]
		return name + compliment
	},
	getComplimentWithAlliteration: function (name) {
		// Returns a randomly generated animal, and a random adjective matching the first letter

		var mutableAdjectives = adjectives
		var animal = animals[Math.floor(Math.random() * animals.length)]
		var letter = animal.charAt(0)
		// Filter adjectives to ones that match
		matchingAdjectives = mutableAdjectives.filter(function(word) {
			return word.charAt(0) == letter
		})
		var adjective = matchingAdjectives[Math.floor(Math.random() * matchingAdjectives.length)]
		return name + ', you ' + adjective + ' ' + animal + '.'
	}
}