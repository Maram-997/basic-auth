'use strict';
 module.exports= (req,res,next) => {
     const errMsg = {
         status : 404 ,
         message : "Not Found"
     }
     res.status(404).json(errMsg)
 }