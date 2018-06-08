const knope = require('./knope.js')
var userName = require("os").userInfo().username
userName = userName.charAt(0).toUpperCase() + userName.substr(1);
compliment = knope.getCompliment(userName)

console.log("\n\n88      a8P   888b      88    ,ad8888ba,    88888888ba   88888888888  \n88    ,88'    8888b     88   d8''    `'8b   88      '8b  88           \n88  ,88'      88 `8b    88  d8'        `8b  88      ,8P  88           \n88,d88'       88  `8b   88  88          88  88aaaaaa8P'  88aaaaa      \n8888'88,      88   `8b  88  88          88  88'''''''    88'''''      \n88P   Y8b     88    `8b 88  Y8,        ,8P  88           88           \n88     '88,   88     `8888   Y8a.    .a8P   88           88           \n88       Y8b  88      `888    `'Y8888Y''    88           88888888888  \n                                                                      \n")
console.log(" ad888888b,     ,a8888a,         88   ad888888b,  \nd8'     '88   ,8P''  `'Y8,     ,d88  d8'     '88  \n        a8P  ,8P        Y8,  888888          a8P  \n     ,d8P'   88          88      88       ,d8P'   \n   a8P'      88          88      88     a8P'      \n a8P'        `8b        d8'      88   a8P'        \nd8'           `8ba,  ,ad8'       88  d8'          \n88888888888     'Y8888P'         88  88888888888  \n")

console.log("==========================================")
console.log(compliment)
console.log("==========================================")
