import mongoose, { Document, Schema } from 'mongoose';


export interface IUser extends Document {
  email: string;
  password: string;
  isVerified: boolean;
  verificationCode: string;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    required: true,
  },
});

// Crear y exportar el modelo
const User = mongoose.model<IUser>('User', UserSchema);
export default User;
