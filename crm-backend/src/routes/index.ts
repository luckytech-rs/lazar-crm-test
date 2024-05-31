import { Router } from 'express';
import { registerUser, loginUser, getAllUsers, getProfile } from '../controllers/userController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.get('/profile', authenticateToken, getProfile);

export default router;
