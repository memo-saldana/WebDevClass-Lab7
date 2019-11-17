const MyError = require('./MyError');

let errorHandler = () => async (err,req,res,next) => {
  if(err.hasOwnProperty('joi')){
    err.name = 'JoiValidationError'
  }
  switch(err.name){
    case 'MongoError':
      console.log("MONGOERROR");
      if( err.code === 11000){
        next(new MyError(409,'Alguna de tus credenciales ya fue utilizada.'));
      } else {
        next(new MyError(409, 'Mongo Error'));
      }
    break;
      
    case 'CastError':
      console.log("CASTERROR");
      // next(new MyError(400,'El valor "' + err.value + '" no es aceptado para el campo: ' + err.kind))
      next(new MyError(409,"Verifique los campos ingresados"))
    break;
      
    case 'ValidationError':
      console.log("VALIDATIONERROR");
      let msg = '';
      for(type in err.errors){
        if(msg.length > 0){
          msg+= " ";
        }
        msg+=err.errors[type].message;
      }
      // next(new MyError(409,msg))
      next(new MyError(409,"Verifique los campos ingresados"))
    break;
    case 'ReferenceError':
      console.log("REFERENCEERROR")
      console.log(err.message)
      next(new MyError(400, "Hubo un error en el campo "+ err.message.split(' ')[0], err.stack));
    break;
        
    case 'CustomError':
      next(err)
    break;
      
    default:
      next(err);
  }

}

module.exports = errorHandler;