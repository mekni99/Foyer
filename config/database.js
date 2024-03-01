

const mongoose = require('mongoose');
//mongoose connect with database db


const dbConnection=()=> {
    mongoose
    .connect(process.env.DB_URI).then((conn) => {
        console.log(`Database Connected: ${conn.connection.host}`);
      }).catch((error) => {
        console.error("Error connecting to database:", error);
      });
      



};

module.exports = dbConnection;