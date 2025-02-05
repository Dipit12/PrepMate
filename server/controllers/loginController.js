const User = require("../models/userSchema");

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
    if (userExists.password === password) {
        console.log("Logged in successfully");
        return res.redirect("/dashboard");  // Redirect without JSON response
    } else {
        return res.status(401).json({ msg: "Incorrect password" });  // Handle wrong password
    }
};

const registerUser = async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.status(400).json({ msg: "Email/Username/Password field empty" });
    }

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        return res.status(400).json({ msg: "User already exists.. please go to the login page" });
    }

    const newUser = await User.create({ username, email, password });
    if (newUser) {
        console.log("New user created");
        return res.redirect("/dashboard");
    }

    return res.status(500).json({ msg: "Internal server error" });
};

module.exports = { registerUser, loginUser };
