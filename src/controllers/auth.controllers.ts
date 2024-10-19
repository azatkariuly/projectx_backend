import { Request, Response } from "express";
import userModule from "../modules/user.module.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userRegister = async (req: Request, res: Response) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // check if user is already in db
    const user = await userModule.findOne({
        $or: [{ username: username }, { email: email }]
    });

    if (user) {
        res.status(400).send('Such user already exists')
        return
    }

    // hash user password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    // create and store a new user
    const newUser = new userModule({
        username: username,
        email: email,
        password: hashedPassword,
    });

    try {
        newUser.save()
        res.status(201).send('user successfully created')
    } catch (error) {
        res.status(400).send(error);
    }
}

export const userLogin = async (req: Request, res: Response) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        // check if email or exists
        const user = await userModule.findOne({
            $or: [{ username: username }, { email: email }]
        });

        if (!user) {
            res.status(400).send('Email or username is wrong')
            return
        }

        // check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).send('password is wrong')
            return
        }

        // create a token
        const accessToken = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_KEY, { expiresIn: '15m' });
        const refreshToken = jwt.sign({_id: user._id}, process.env.JWT_REFRESH_KEY)

        res.send({accessToken: accessToken, refreshToken: refreshToken});

    } catch (error) {
        res.status(400).send(error);
    }
}

export const userToken = async (req: Request, res: Response) => {
    res.send('user token')
}