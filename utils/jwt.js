import jwt from 'jsonwebtoken';

// Generate JWT token
 export const generateToken = (admin) => {
    const payload = {
        adminId: admin._id,
        email: admin.email,
        isAdmin: admin.isAdmin
    };

    const options = {
        expiresIn: '1h' 
    };

    // Sign token
    return jwt.sign(payload, 'ACCESS_TOKEN_SECRET', options);
};
