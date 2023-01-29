import express, { Request, Response } from "express";
import { UserModel } from '../models/userModel';

const userRouter = express.Router();

// Find or create a user by username
userRouter.post('/', async (req: Request, res: Response) => {
    const { userName } = req.body;

    if (!userName) {
        return res.status(400).json({ message: 'Username is required.' });
    }

    try {
      let user = await UserModel.findOne({ userName });
      if (!user) {
        user = new UserModel({ userName });
        await user.save();
        return res.status(201).send(user);
      }
      return res.status(200).send(user);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
});

export { userRouter };