var express = require('express'),
    router = express.Router({mergeParams: true}),
    personCtr = require('../controllers/person'),
    aHandler = require('express-async-handler');

router.all('/*', (req,res) => res.status(200).json({message: "Lab 7 API up and running!"}))
module.exports = router;