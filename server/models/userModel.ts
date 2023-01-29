import mongoose from 'mongoose';

interface IUser {
  userName: string;
}

const UserSchema = new mongoose.Schema<IUser>({
    userName: { 
      type: String, 
      unique: true, 
      required: true 
    }
});

const UserModel = mongoose.model<IUser>('User', UserSchema);

export { UserModel };