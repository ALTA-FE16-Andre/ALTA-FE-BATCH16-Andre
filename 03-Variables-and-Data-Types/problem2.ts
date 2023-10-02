const prompt = require('prompt-sync')();

let T = prompt("Tinggi Tabung: ")
let r = prompt("Radius: ")

let luasPermukaanTabung = ((2 * Math.PI * r * r) + (2 * Math.PI * r * T))

console.log(luasPermukaanTabung)