"use strict";

const Profiles = require("../models");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp',);

const Profile = mongoose.model('Profiles', Profiles);

module.exports = Profile;