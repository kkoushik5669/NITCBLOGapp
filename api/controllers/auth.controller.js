import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
const signup=async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password || username==="" ||password==="" ||email==="" ) {
        res.status(400).json({message:'All fields are required'});
    }
    const hashpassword=bcryptjs.hashSync(password,10);
    const newUser=new User({
        username,email,password:hashpassword
    });
    try{
        await newUser.save();
        res.json('Signup successful');
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};
export default signup;