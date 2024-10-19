import express from  'express';
import { userLogin, userRegister, userToken } from '../controllers/auth.controllers.js';
import { auth } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/token', auth, userToken);

export default router;