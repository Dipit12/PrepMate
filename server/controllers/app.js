const bcrypt = require("bcrypt");

async function hashPassword() {
    const pass = "1234abcd";
    const salt = bcrypt.genSaltSync(10);
    const hashPass = await bcrypt.hash(pass, salt);
    console.log({
        pass,
        hashPass
    });
}

hashPassword();
