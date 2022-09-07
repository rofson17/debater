import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import userSchema from "../models/auth.js";

const secrect_key = process.env.SECRECT_KEY;

export const singUp = async (req, res) => {
    const { name, email, password, conformPassword } = req.body;
    if (!name || !email || !password || !conformPassword) return res.status(402).json({ message: 'please! fill all inupt fields' });
    if (password !== conformPassword) return res.status(401).json({ message: 'invalid credentials' });

    try {
        const existUser = await userSchema.findOne({ email });
        if (existUser) return res.status(401).json({ message: 'invalid credentials' });

        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = await userSchema.create({ name, email, password: hashPassword });
        res.status(200).json({ message: 'user sing up' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const singIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(402).json({ message: 'please! fill all inupt fields' });

    try {
        const existUser = await userSchema.findOne({ email });
        if (!existUser) return res.status(401).json({ message: 'invalid credentials' });

        const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
        if (!isPasswordCorrect) return res.status(401).json({ message: 'invalid credentials' });

        res.status(200).json({ message: existUser.name });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const editPassword = async (req, res) => {
    const { id: _id } = req.params;
    const { password, conformPassword } = req.body;
    if (!password || !conformPassword) return res.status(401).json({ message: 'invalid credentials' });

    try {
        const hashPassword = await bcrypt.hash(password, 12);
        if (!mongoose.Types.ObjectId(_id)) return res.status(404).json({ message: 'no user with the id' });
        const updateAccount = await userSchema.findByIdAndUpdate(_id, { password: hashPassword }, { new: true });
        res.status(200).json(updateAccount);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const forgottenPassword = async (req, res) => {
    const { email, verifyCode } = req.body;
    if (!email || !verifyCode) return res.status(401).json({ message: 'invalid credentials' });
    try {

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const verifyAccount = async (req, res) => {
    const { verifyCode } = req.body;
    const { id: _id } = req.body;
    if (!verifyCode) return res.status(401).json({ message: 'invalid credentials' });

    try {
        const existUser = await userSchema.findOne({ _id });
        if (!existUser) return res.status(402).json({ message: 'invalid credentials' });

        if (existUser.verifyCode !== verifyCode) return res.status(401).json({ message: 'invalid credentials' });
        const verifyedUser = await userSchema.findOneAndUpdate({ _id }, { isVerifyed: true }, { new: true });
        return res.status(200).json(verifyedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAccount = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const existUser = await userSchema.findOne({ _id });
        if (!existUser) return res.status(401).json({ message: 'invalid credentials' });
        res.status(200).json(existUser);

        res.json({ message: "sing in" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAccount = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId(id)) return res.status(404).json({ message: 'no user with the id' });
        await userSchema.findByIdAndRemove(id);
        res.status(200).json({ message: 'user account has been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
