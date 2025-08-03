import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, '邮箱格式不正确']
    },

    age: {
        type: Number,
        min: 1,
        max: 100,
        required: true
    },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;