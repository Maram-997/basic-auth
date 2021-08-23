'use strict';

const express = require('express');
 const router = express.Router();

 const {
    signIn,
    signUp
 } = require('../implementations/usersImpl');

 router.post('/signin', signIn);
 router.post('/signup', signUp)