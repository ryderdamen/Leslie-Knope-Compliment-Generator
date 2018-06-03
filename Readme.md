# Leslie Knope Compliment Generator

[![NPM version](https://badge.fury.io/js/knope.svg)](http://badge.fury.io/js/knope)

A node.js package to generate compliments like Parks and Rec's Leslie Knope.

![Leslie Knope saying "Ann, you rainbow infused space unicorn"](https://i.giphy.com/media/AxVvjWI0xRibWIYJEY/giphy.webp)



## Setup
Simply install with NPM. 

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

### Examples

* Ann, you faithful hippopotamus.
* Ann, you energized worm.
* Ann, you self-disciplined boar.
* Ann, you knowledgeable crocodile.
* Ann, you pioneering lark.


