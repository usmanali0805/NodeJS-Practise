const express = require('express')
const router = express.Router()

// Middleware that is specify to that router
router.use((req, res , next)=>{
    console.log('Time :' +Date.now())
    next()
})


router.get ('/' ,(req , res )=>{
    res.send("Blog Homepage")
})

router.get('/about' , (req , res )=>{
    res.send ("Blog About page")
})

module.exports = router