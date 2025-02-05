const User = require("../models/userSchema")

const loginUser = async (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    // check if the user already exists or not, if yes then redirect him to dashboard
    // if no , then alert him to register first
    if(!email || !password){
        res.status(400).json({msg:"Email or password field empty"})
    }
    const userExists = await User.findOne({ where: { email: email} });
    if(!userExists){
        res.status(400).json({msg:"Register yourself first"})
    }
    
    if(User.password == password){
        res.redirect("/dashboard")
        res.status(200).json({msg:"Logged in successfully"})
    }
}

const registerUser = async (req, res) => {
    const { email, password, username } = req.body;
  
    // Check if all fields exist
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
      // Return so no further code is executed
      return res.redirect("/dashboard");
    }
  
    // If we reach here, user creation failed
    return res.status(500).json({ msg: "Internal server error" });
  };
  

module.exports = {registerUser, loginUser}