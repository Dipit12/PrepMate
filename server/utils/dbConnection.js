const { Sequelize } = require("sequelize");

// Use Railway-provided environment variable or fallback to local MySQL
const DATABASE_URL = "mysql://root:eVjIzVpzzKbhfMFfRucefODUUdAxxeSD@viaduct.proxy.rlwy.net:52061/railway";

// Initialize Sequelize with the connection URL
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "mysql",
    dialectModule: require("mysql2"),
    logging: false, // Disable logging in production
});

module.exports = sequelize;
