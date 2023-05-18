
//imports funcs for auth
//--require('./functions/authFunctions')

//imports express api stuff
const express = require('express');

const router = express.Router();

router.use(express.json())
//routes

router.post('/', (req, res) => {
    //--testConsole()
    res.send('Root Auth')
})

router.get('/connect', (req, res) => {
    res.send('Redzone API Connection Test')
})

router.post('/register', (req, res) => {
    res.send('Register')
})

router.post('/login', (req, res) => {
    
})


//exports as
module.exports = router