const _ = require('lodash')

function isSutripta(str) {
    return str === "Sutripta"
}

function checkString(value) {
    return _.isString(value)
}

module.exports = isSutripta
module.exports = checkString
