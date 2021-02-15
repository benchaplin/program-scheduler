import mongoose from "mongoose";

export const User = mongoose.model("User", {
    type: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    timezone: Number,
    courses: Array
}, "users");
