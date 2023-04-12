"use strict"

var DefaultController = () => {};

DefaultController.index = (req, res, next) => {
    res.send("Hola NodeJS");
    next();
}

module.exports = DefaultController;