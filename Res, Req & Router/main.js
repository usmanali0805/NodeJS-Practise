const express = require('express')
const app = express()
const port = 3000

app.use(express.static("Public"))


// WE CAN USE REQUEST FROM BOTH OF WAY THE SEPERATE AND THE COMBINE WAY
app.get('/',(req,res) => {
  console.log("Hello this is get request")
  res.send("This is get request")
})

app.post('/',(req,res) => {
  console.log("Hello this is post request")
  res.send("This is post request")
})

app.put('/',(req,res) => {
  console.log("Hello this is put request")
  res.send("This is put request")
})

app.delete('/',(req,res) => {
  console.log("Hello this is delete request")
  res.send("This is delete request")
})

app.listen(port , ()=>{
    console.log(`Example app listening ${port}`)
})


// lIKE THIS 

// app.get('/',(req,res) => {
//   console.log("Hello this is get request")
//   res.send("This is get request")
// }).post('/',(req,res) => {
//   console.log("Hello this is post request")
//   res.send("This is post request")
// }).put('/',(req,res) => {
//   console.log("Hello this is put request")
//   res.send("This is put request")
// }).delete('/',(req,res) => {
//   console.log("Hello this is delete request")
//   res.send("This is delete request")
// }).listen(port , ()=>{
//     console.log(`Example app listening ${port}`)
// })