"use strict"

var path = require('path'),
    app = require(`.${path.sep}app`);

app.listen(app.get('settings').port, () => {
    console.log(`Corriendo servidor en entorno "${app.get('settings').DEPLOY}" del servidor http://${app.get('settings').host}:${app.get('settings').port}`);
});