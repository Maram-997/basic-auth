'use strict';

const POSTGRES_URI = process.env.POSTGRES_UPI || "postgres://postgres@localhost:5432/basicAuth";
const { Sequelize , DataTypes } = require('sequelize');

const users = require('./user-model')


let sequelize = new Sequelize (POSTGRES_URI, {});

const userModel  = users(sequelize, DataTypes);

module.exports = {
    db : sequelize,
    users : userModel
}