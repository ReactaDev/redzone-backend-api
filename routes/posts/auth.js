
//imports funcs for auth
//--require('./functions/authFunctions')

//imports express api stuff
const express = require('express');

const router = express.Router();

//routes

router.post('/', (req, res) => {
    //--testConsole()
    res.send('Root Auth')
})

router.get('/connect', (req, res) => {
    res.send('Redzone API Connection Test')
})

router.post('signup', (req, res) => {

})


//exports as
module.exports = router;