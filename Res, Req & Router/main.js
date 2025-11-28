const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("Public"))
app.use('/blog' , blog)


// WE CAN USE REQUEST FROM BOTH OF WAY THE SEPERATE AND THE COMBINE WAY
app.get('/',(req,res) => {
  console.log("Hello this is get request")
  res.send("This is get request")
})


app.get('/index',(req , res)=>{
  console.log('This is index2.html ')
  res.sendFile("templates/index2.html" , {root:__dirname})
})

app.get('/json',(req , res)=>{
  console.log('This is index2.html ')
  res.json({a:2 , d:45 , f:54 , f:"Usman"})
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