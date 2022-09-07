import express from "express";
import { getAccount, singIn, singUp, editPassword, forgottenPassword, deleteAccount, verifyAccount } from "../controllers/auth.js";

const router = express.Router();

router.post('/singup', singUp);
router.post('/singin', singIn);
router.patch('/:id/edit', editPassword);
router.patch('/:id', getAccount);
router.delete('/:id', deleteAccount);
router.patch('/', forgottenPassword);
router.post('/:id/verify', verifyAccount);
export default router;
