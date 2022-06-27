import { Router } from 'express';
import * as authCrtl from '../controller/auth.controller';
const router = Router();

router.post('/signup', authCrtl.signup);
router.post('/signin', authCrtl.signin);

export default router;