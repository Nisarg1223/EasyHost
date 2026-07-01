import {body,validationResult} from 'express-validator';

export function validate(req,res,next){
   const err = validationResult(req);

   if(!err.isEmpty()){
    return res.status(400).json({
        errors:err.array()
    });
   }

   next();
}

export const registerValidator = [
    body("username")
      .trim()
      .notEmpty().withMessage("username is required")
      .isLength({min:3,max:30}).withMessage("username must be between 3 and 3o characters")
       .matches(/^[a-zA-Z0-9_]+$/).withMessage("Username can only contain letters, numbers, and underscores"),
    
    body("email")
      .trim()
      .notEmpty().withMessage("Email is requires")
      .isEmail().withMessage("Please provide the valid Email"),

    body("password")
      .trim()
      .notEmpty().withMessage("password is required")
      .isLength({min:6}).withMessage("the password should atleast 6 characters long"),

    validate
]

export const loginValidator = [
    
    body("email")
      .trim()
      .notEmpty().withMessage("Email is requires")
      .isEmail().withMessage("Please provide the valid Email"),

    body("password")
      .trim()
      .notEmpty().withMessage("password is required")
      .isLength({min:6}).withMessage("the password should atleast 6 characters long"),

    validate
]
