import mongoose from "mongoose";

//generate random numbers
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerifyed: {
        type: Boolean,
        default: false
    },
    verifyCode: {
        type: Number,
        default: random(1000, 8888)
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const usersInfo = mongoose.model('userSchema', userSchema);

export default usersInfo;
