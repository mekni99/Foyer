const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const morgan = require('morgan');
const app = express();
//mongoose connect with database db
const mongoose = require('mongoose');

const dbConnection=require('./config/database');
const categoryRoute =require('./routes/categoryRoute');
dbConnection();
  //////MIddleware


  app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

//  Mount routes

app.use('/api/v1/categories' , categoryRoute);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
