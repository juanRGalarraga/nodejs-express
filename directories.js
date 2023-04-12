const DS = global.DS;
const DIR_BASE = global.DIR_BASE;
const DIR_SYSTEM = DIR_BASE + "system" + DS;

$constants = {
    DIR_MIDDLEWARES : DIR_BASE + "middlewares" + DS,
    DIR_CONFIG : DIR_SYSTEM + "config" + DS,
    DIR_ROUTES : DIR_BASE + DS + "routes" + DS,
    DIR_CONTROLLER : DIR_BASE + "controllers" + DS,
    DIR_MODEL : DIR_SYSTEM + "model" + DS,
    DIR_INCLUDES : DIR_SYSTEM + "includes" + DS
};

Object.freeze($constants);

module.exports = $constants;