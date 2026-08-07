// class ApiError extends Error{
//     constructor(
//         statusCode,
//         message= "somthing went wrong",
//         error = []
//         stack=""
//     ){
//         super(message);
//         this.statuseCode = statusCode;
//         this.data = null;
//         this.message =message ;
//         this.errors = this.this;
//         this.errors = this errors;

// if(statck){
//     this.stack = statck;
// } else{
//     Error.captureStackTrace (this,this.cause
//         constructor);
    
// }

//     }
// }



// export { ApiError };




class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);

    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.errors = errors;
    this.success = false;
    this.errors =  errors

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };