const prompt = require('prompt-sync')()

let namaDepan = prompt("Enter your first name: ")
let namaBelakang = prompt("Enter your last name: ")
let tahunLahir = prompt("Enter your born year: ")

let age = (2023 - tahunLahir)

console.log('Hello, ' + namaDepan + ' ' + namaBelakang + ' You are ' + age + ' years old')