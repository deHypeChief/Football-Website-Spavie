// routes/user.js
import express from 'express';
const router = express.Router();

import { getUsers, registerUser } from '../controllers/register.js';

router.post('/register', registerUser)
router.get('/', getUsers)


export default router;