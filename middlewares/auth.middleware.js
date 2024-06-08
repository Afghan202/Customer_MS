
export const isAdmin = (req, res, next) => {
    const isAdmin = req.user && req.user.isAdmin;
    if (!isAdmin) {
        return res.status(403).json({ message: 'Unauthorized: Only admins can access this resource' });
    }
    next();
};
