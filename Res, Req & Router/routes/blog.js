const express = require('express')

const router = express.Router()

// Define the homepage route
router.get('/',(req , res)=>{
    res.send('Blogs home pages')
})

// Define the about page
router.get('/about' , (req , res)=>{
    res.send('Blogs about page')
})

router.get('/blogpost/:slug' , (req , res)=>{
    res.send(`This is the blog post page with this slug :${req.params.slug}`)
})

module.exports = router