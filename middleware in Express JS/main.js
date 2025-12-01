const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const blog = require('./routes/blog')

// Blog
app.use('/blog',blog)

// Build in middleware
app.use(express.static("public"))

// Custom middleware
// middleware-1 for logger for our applicarion
app.use((req , res , next)=>{
  // console.log(req.headers)
  req.usman = "Babar 56"
fs.appendFileSync('logs.txt',`${Date.now()} is a ${req.method} \n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send('Hacked by Middleware')
    next()
})

// Second middleware
app.use((req , res , next)=>{
    console.log("LOGGED 2")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.usman)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
