const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const sitename = 'Adidas'
    const searchname = 'Search Now'
    res.render("index", { siteName: sitename, searchName: searchname })
})

app.get('/blog/:slug', (req, res) => {
    const blogname = 'Adidas why and when ??'
    const blogcontent = 'Its a very good brand'
    res.render("blogpost", { blogName: blogname, blogContent: blogcontent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
