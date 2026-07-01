import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate:{
            validator:function(email){
                return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
            }
        }
    }
},
  {timestamps:true}
)

userSchema.pre('save',async function(){
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password,10);

});

userSchema.methods.comparePassword = function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password);
};

const UserModel = mongoose.model("user",userSchema);

export default UserModel;