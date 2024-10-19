import express from  'express';
import { userLogin, userRegister, userToken } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/token', userToken);

export default router;