# Leslie Knope Compliment Generator
A node.js package to generate compliments like Parks and Rec's Leslie Knope.

## Setup
Simply install with NPM
`````bash
npm install knope
`````

## Usage
To use, simply require the package, then retrieve a compliment with the getCompliment('Ann') method by passing in the subject's name as a parameter.

`````javascript

const knope = require('knope')

// Pass in the name as a parameter
var compliment = knope.getCompliment('Ann')

console.log(compliment)

`````
