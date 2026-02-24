db = db.getSiblingDB('mongoflix');

db.movies.drop()
console.log("witaj w bazie mongoflix!");

const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "../data/movies.json")
const fileContent = fs.readFileSync(filePath, "utf8")

const data = JSON.parse(fileContent)
db.movies.insertMany(data)
console.log("dane zapisano pomyslnie!");