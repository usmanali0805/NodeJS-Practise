import fs from 'fs/promises'
let a = await fs.readFile("Usman.txt")
console.log(a.toString())

let b = await fs.appendFile("Usman.txt" , "\n\n\n\nThis is amazing")
console.log(a.toString())