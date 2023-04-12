"use strict"

require(global.DIR_BASE + "directories");

var 
    express = require('express'),
    router = express.Router(),
    DefaultController = require(DIR_CONTROLLER + "defaultController");
    
router
    .all('/', DefaultController.index);

module.exports = router;