import { kMaxLength } from 'buffer';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        minLength: 6,
        maxLength: 128,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minLength: 6,
        maxLength: 128,
    },
    password: {
        type: String,
        require: true,
        minLength: 6,
        maxLength: 128,
    }
})

export default mongoose.model('User', userSchema);