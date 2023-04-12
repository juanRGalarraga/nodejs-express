let JWT = require('./services/jwt');

let jwt = new JWT();

jwt.generateToken({ id: 1, name: "Juan Alberto", surname: "Spinoza"});

console.log(jwt.getToken());
console.log(jwt.verifyToken(jwt.getToken()));

