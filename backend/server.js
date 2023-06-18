const express = require('express');
const workoutsRoutes = require('./routes/workouts');
const usersRoutes = require('./routes/users');
const mongoogse = require('mongoose');
require('dotenv').config();

// express app
const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => { next() })

// routes
app.use('/api/workouts/', workoutsRoutes)
app.use('/api/user/', usersRoutes)

// connect to db
mongoogse.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests on port 3000
        app.listen(process.env.PORT);
    })
    .catch((err) => {
        console.log(err);
    })
