const express = require('express')
const app = express()
const port = 3000

app.use(express.static('Public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About' , (req ,res)=>{
  res.send('Hello is a About ')
})

app.get('/Contact' , (req , res)=>{
  res.send('Hello this is contact page ')
})

app.get('/About/:slug/:second' , (req , res )=>{
  res.send(`Intro to ${req.params.slug} and the second is ${req.params.second}`)
  console.log(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
