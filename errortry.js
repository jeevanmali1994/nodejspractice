// app.js
let greet = require('./greet.js')
console.log(greet.p)

// greet.js
let exp = module.exports = {};
function p(a, b) {
return a**b;
}
exp = p();