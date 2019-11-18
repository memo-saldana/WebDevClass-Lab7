var express = require('express'),
    router = express.Router({mergeParams: true});

router.all('/*', (req,res) => res.status(200).json({message: "Lab 7 API up and running!"}))

module.exports = router;