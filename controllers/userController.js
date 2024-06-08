import {User} from "../models/userModel.js"
import AdminLogin from "../models/adminLogin.js";
import {generateToken} from "../utils/jwt.js"



export const createAdminLogin = async (req, res) => {
    try {
        const adminLogin = new AdminLogin(req.body);
        const savedAdminLogin = await adminLogin.save();
        res.status(201).json(savedAdminLogin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAdminLogins = async (req, res) => {
    try {
        const adminLogins = await AdminLogin.find();
        res.status(200).json(adminLogins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAdminLogin = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedAdminLogin = await AdminLogin.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAdminLogin) return res.status(404).json({ message: 'Admin login not found' });
        res.status(200).json(updatedAdminLogin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteAdminLogin = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAdminLogin = await AdminLogin.findByIdAndDelete(id);
        if (!deletedAdminLogin) return res.status(404).json({ message: 'Admin login not found' });
        res.status(200).json({ message: 'Admin login deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await AdminLogin.findOne({ email, password });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const token = generateToken(admin);
        res.status(200).json({ token, message:"admin logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // console.log("admin logged in successfully")
};

export const logOut=async(req,res)=>{
    
}





export const create=async (req,res)=>{

    try {
         const newUser=new User(req.body);
         const {name}=newUser;
         const userExist=await User.findOne({name})

         if(userExist){
            return res.status(400).json({message:"customer already exist"})
         }

         const savedData=await newUser.save();
         res.status(200).json(savedData)
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const getAllUsers=async(req,res)=>{
    try {
        const userData=await User.find()
        if(!userData||userData.length===0){
            return res.status(404).json({message:"customer data not found"})
        }
        res.status(200).json(userData)
    }
 catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const getUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({message:"customer data not found"})
        }

        res.status(200).json(userExist)

    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const update=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({message:"customer data not found"})
        }
       const updateData= await User.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.status(200).json(updateData)
       
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({message:"customer data not found"})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({message:"customer deleted successfully"})

    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}
