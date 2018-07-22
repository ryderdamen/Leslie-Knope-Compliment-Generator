# Leslie Knope Compliment Generator

[![NPM version](https://badge.fury.io/js/knope.svg)](http://badge.fury.io/js/knope)

A node.js package to generate compliments like Parks and Rec's Leslie Knope.

![Leslie Knope saying "Ann, you rainbow infused space unicorn"](https://i.giphy.com/media/AxVvjWI0xRibWIYJEY/giphy.webp)



## Setup
Simply install with NPM. 

`````bash
npm install knope
`````

## Basic Usage
To use, simply require the package, then retrieve a compliment with the getCompliment('Ann') method by passing in the subject's name as a parameter.

`````javascript
const knope = require('knope')

// Pass in the name as a parameter
var compliment = knope.getCompliment('Ann')

console.log(compliment)

`````

Some examples include:

* Ann, you faithful hippopotamus.
* Ann, you energized worm.
* Ann, you self-disciplined boar.
* Ann, you knowledgeable crocodile.
* Ann, you pioneering lark.

### Extra Perk(ins)
You can pass in a few other parameters for a few more options. Pass in a number anywhere from 2-5 in the second parameter to get back that many adjectives. Instead of a number, you can also pass in the string 'random' to get a random (between 1 and 5) number of adjectives back.

`````javascript
const knope = require('knope')

// Get three adjectives before the animal for Ann, because she's great.
var compliment = knope.getCompliment('Ann', 3)

console.log(compliment)

`````

Example:

* Ann, you beautiful, talented, powerful, muskox.


You can also specify whether you want an Oxford comma or not. It's included by default because that's the _right_ thing to do. If you'd like to turn it off, make your third parameter `false`.

`````javascript
const knope = require('knope')

// Get three adjectives before the animal for Ann, because she's great.
var compliment = knope.getCompliment('Ann', 3)

console.log(compliment)

`````

Example: 

* Ann, you inspired, fortuitous, smart caribou.

### Alliteration
If you're aching for alliteration, feel free to use the getComplimentWithAlliteration method.

`````javascript
const knope = require('knope')

// Gets a compliment with alliteration
var compliment = knope.getComplimentWithAlliteration('Ann')

console.log(compliment)

`````

Some examples include:

* Ann, you compassionate chimpanzee.
* Ann, you modest mallard.


### Official Compliments
If you'd like an official compliment straight from Leslie Knope herself, use the getOfficialCompliment('Ann') method the same as above.

`````javascript
const knope = require('knope')

// Get 3 adjectives, without the oxford comma
var compliment = knope.getOfficialCompliment('Ann', 3, false)

console.log(compliment)

`````

Some examples include:

* Ann, you beautiful rule-breaking moth.
* Ann, you beautiful, sassy mannequin come to life.
* Ann, you beautiful tropical fish, you're smart as a whip, and cool under pressure.


