'use strict';
module.exports = (err,req,res,next) =>{
const errMsg = err.message ? err.message : err;
const errObj = {
    status : 500,
    message : errMsg
}
res.status(500).json(errObj);
}