const user = require('../models/userModel');
const mongoose = require('mongoose');

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

module.exports = {
    loginUser,
    signupUser
}