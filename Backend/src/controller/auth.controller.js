import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';


export async function RegisterController(req,res){
    const {username,email,password} = req.body;

    const isUserExists = await UserModel.findOne({
        $or:[{email},{username}],

    });

    if(isUserExists){
        return res.status(400).json({
            message:"user already exists",
            success:false,
            error:"user already exists",
        });
    }

    const User = await UserModel.create({
        username,
        email,
        password
    });

    const token = jwt.sign({
        id:User._id,
        username:User.username,
        email:User.email
    },
    process.env.JWT_SECRET,
    {expiresIn: '7d'},
);

res.cookie("token",token);

return res.status(201).json({
    message:"user Registered sucessfully",
    success:true,
    user:{
        id:User._id,
        username:User.username,
        email:User.email,

    }
});

}

export async function LoginController(req,res){
    const {email,password} = req.body;

    const user = await UserModel.findOne({
        email
    })

    if(!user){
        return res.status(404).json({
           message:"invalid email or password",
           success:false,
           error:"user not found",
        })
    }

    const isPasswordMatch = await user.comparePassword(password);
  
    if(!isPasswordMatch){
        return res.status(400).json({
            message:"invalid username or password",
            success:false,
            error:"invalid password",
        })
    }

    const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {expiresIn:'7d'},

    );

    res.cookie("token",token);

   return res.status(201).json({
        message:"Login Sucessfull",
        success:true,
        user:{
            id: user._id,
          username: user.username,
          email: user.email,
        }
    });
}