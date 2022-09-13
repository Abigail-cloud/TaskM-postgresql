const {CustomError}= require('../errors/custom-error')
const errorHandler = (err, req, res, next) => {
//   return res.status(500).json({msg:err})  
    if (err instanceof CustomAPIError) {
       return  res.status(err.statusCode).json({msg:err.message})
   }
return res.status(500).json({msg:'Something went wrong, try again for better result'})  
}
module.exports = errorHandler;