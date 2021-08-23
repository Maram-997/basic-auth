'use strict';

module.exports = (req,res,next) => {
console.log(`THIS FROM THE LOGGER MIDDLEWARE : Path ${req.path} And The Method is : ${req.method}`);
next();
}