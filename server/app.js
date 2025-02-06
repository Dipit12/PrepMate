const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const loginRoutes = require("./routes/loginRoutes")
const sequelize = require("./utils/dbConnection")
const app  = express()
const PORT = 3000;
app.use(cors())
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies (if needed)
app.use(express.urlencoded({ extended: true }));
app.use(loginRoutes)
sequelize.sync()
.then(result => console.log(result))
.catch(err => console.log(err))



app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`)
})