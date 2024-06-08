import mongoose from 'mongoose';

const adminLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: true
    }
});

const AdminLogin = mongoose.model('AdminLogin', adminLoginSchema);

export default AdminLogin;
