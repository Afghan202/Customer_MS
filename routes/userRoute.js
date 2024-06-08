import express from "express";
import { create, deleteUser,
     getAllUsers,
      getUserById,
       update,adminLogin
     } from "../controllers/userController.js";
     
     import { isAdmin } from "../middlewares/auth.middleware.js";
       




import {
    createAdminLogin,
    getAdminLogins,
    updateAdminLogin,
    deleteAdminLogin
} from "../controllers/userController.js";

const router=express.Router();

router.post('/user',create);
router.get('/users',getAllUsers)
router.get('/user/:id',getUserById)
router.put('/update/user/:id',update)
router.delete('/delete/user/:id',deleteUser)

//admin login route
router.post('/admin/login', adminLogin)
router.post('/admin/logout')

//admin crud routes
router.post('/admin/logins', createAdminLogin);
router.get('/admin/logins', getAdminLogins);;
router.put('/admin/logins/:id', updateAdminLogin);
router.delete('/admin/logins/:id', deleteAdminLogin);

export default router

