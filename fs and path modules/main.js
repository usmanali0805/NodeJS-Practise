const fs = require("fs")

console.log("Usman is typing....")

// fs.writeFileSync("Usman.txt" , "Usman is a good boy")

// We have to always use "writeFile" instead of "writeFileSycn"

fs.writeFile("Usman2.txt" , "Usman is a good boy " ,  ()=>{
    fs.readFile("Usman.txt" , (error , data)=>{
        console.log(error , data.toString())
    })
    console.log("done")
})

fs.appendFile("Usman.txt" , "UsmanRobo" , (e , d)=>{
    console.log(d)

})
console.log("ending")