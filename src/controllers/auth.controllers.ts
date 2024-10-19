import { Request, Response } from "express";

export const userRegister = async (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // check if user is already in db

        // create and store a new user

    } catch (error) {
        res.status(400).send(error);
    }
}

export const userLogin = async (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // check if email exists

        // check password

        // create token

    } catch (error) {
        res.status(400).send(error);
    }
}

export const userToken = async (req: Request, res: Response) => {
    res.send('user token')
}