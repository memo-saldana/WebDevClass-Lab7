var express = require('express'),
    router = express.Router({mergeParams: true}),
    personCtr = require('../controllers/person'),
    aHandler = require('express-async-handler');

// CREATE multiple
router.post('/', aHandler(personCtr.create() ));

// GET ALL
router.get('/',  aHandler(personCtr.findAll() ));

// GET ONE
router.get('/:id',  aHandler(personCtr.findOne() ));

// UPDATE
router.patch('/:id',  aHandler(personCtr.update() ));

// DELETE
router.delete('/:id', aHandler(personCtr.remove() ));

module.exports = router;