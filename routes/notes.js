const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');


//GET route
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then(data => res.json(JSON.parse(data)))
})

//POST route
router.post('/', (req, res) => {

    const { title, text } = req.body;
    if (req.body && title && text) {
        const note = {
            title,
            text,
            id: uuid()
        }
        readAndAppend(note, './db/db.json')
        res.json('Success!')
        ;
    }

});





module.exports = router;