const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Email or password field empty" });
    }

    const userExists = await User.findOne({ where: { email } });

    if (!userExists) {
        return res.status(400).json({ msg: "Register yourself first" });
    }

    // Correct password comparison
    const isValid = await bcrypt.compare(password, userExists.password);
    if (!isValid) {
        return res.status(401).json({ msg: "Incorrect password" });
    }

    console.log("Logged in successfully");
    return res.status(200).json({ msg: "Logged in successfully", redirect: "/dashboard" });
};

const registerUser = async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.status(400).json({ msg: "Email, Username, or Password field is empty" });
    }

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        return res.status(400).json({ msg: "User already exists, please log in" });
    }

    try {
        const hashedPass = await bcrypt.hash(password, 13);
        const newUser = await User.create({ username, email, password: hashedPass });

        if (newUser) {
            console.log("New user created");
            return res.status(201).json({ msg: "Registration successful", redirect: "/dashboard" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { registerUser, loginUser };
