
let sendAsJson = () => async (err, req, res, next) => {
  if(err.statusCode && err.statusCode !== 500){
     return res.status(err.statusCode).json({code: err.statusCode, success: false, message: err.message})
  } else {
      console.log('err :', err);
      return res.status(500).send("SERVER ERROR");
  }
}
module.exports = sendAsJson