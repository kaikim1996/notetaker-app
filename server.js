const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

// middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// GET route notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})


// GET route index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


//start server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
)