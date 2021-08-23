'use strict';
const { User } = require('../models/user-model');
const base64 = require('base-64');
const bcrypt = require('bcrypt');

async function signIn(req, res) {
    // for getting the req information
    let userInfo = req.header.authorization; // [ Basic userName : password]
    // gor getting the password only 
    let encodedCreditentials = userInfo.split(' ')[1]; // or (' ').pop()
    let decoded = base64.decode(encodedCreditentials);
    let [userName, password] = decoded.split(':');
    // for encrypting the password
    let hashedPassword = await bcrypt.hash(password, 10);
    // assign the new user to the DB ((creating new user))
    const record = await User.create({ userName, password: hashedPassword });
    res.status(200).json(record);



}
    async function signUp(req, res) {
    let userInfo = req.header.authorization; 
    let encodedCreditentials = userInfo.split(' ').pop(); 
    let decoded = base64.decode(encodedCreditentials);
    let [userName, password] = decoded.split(':');
    let isValid = await User.findOne({ where: { userName } });
    if (isValid == null) {
        // for encrypting the password
        let hashedPassword = await bcrypt.hash(password, 10);
        // assign the new user to the DB 
        const record = await User.create({ userName, password: hashedPassword });
        res.status(200).json(record);
    } else {
        // if it's already exists 
        res.status(401).json({ error: ' User Already Exists' })
    }
}

module.exports = { signIn, signUp }