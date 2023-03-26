const User = require('../models/user');
const openCage = require('../services/opencage');

exports.getUser = async (req, res, next) => {
    try {
        let userId = req.params.userId;

        let user = await User.findOne({ userId: userId });

        if (user) {
            res.status(200).json({
                message: "User is already registered",
                user: user
            });
        } else {
            res.status(404).json({
                message: 'User not found!'
            })
        }

    } catch (error) {
        console.log(error);
    }
}

exports.register = async (req, res, next) => {
    try {
        let userId = req.body.userId;
        let username = req.body.username;
        let fullname = req.body.fullname;
        let language = req.body.language;

        let user = await User.findOne({ userId: userId });

        if (!user) {
            let newUser = new User({
                userId: userId,
                username: username,
                fullname: fullname,
                language: language,
                operation: 'none'
            });
            user = await newUser.save();
            res.status(200).json({
                message: "User registered successfully",
                user: user
            });
        } else {
            res.status(409).json({
                message: "User already registered!",
                user: user
            });
        }

    } catch (error) {
        console.log(error);
    }
}

exports.setNumber = async (req, res, next) => {
    try {
        let userId = req.body.userId;
        let number = req.body.number;

        let user = await User.findOne({ userId: userId });
        user.number = number;
        user.operation = 'none';
        user.save();

        res.status(200).json({
            message: `Number saved for user ${user.userId}`,
            user: user
        });

    } catch (error) {
        console.log(error);
    }
}

exports.setLang = async (req, res, next) => {
    try {
        let userId = req.body.userId;
        let language = req.body.language;

        let user = await User.findOne({ userId: userId });
        user.language = language;
        user.save();

        res.status(200).json({
            message: `Lang changed for user ${user.userId}`,
            user: user
        });

    } catch (error) {
        console.log(error);
    }
}

exports.setName = async (req, res, next) => {
    try {
        let userId = req.body.userId;
        let fullname = req.body.fullname;

        let user = await User.findOne({ userId: userId });
        user.fullname = fullname;
        user.operation = 'none';
        user.save();
        res.status(200).json({
            message: `Name changed for user ${user.userId}`,
            user: user
        });

    } catch (error) {
        console.log(error);
    }
}

exports.setOperation = async (req, res, next) => {
    try {
        let userId = req.body.userId;
        let operation = req.body.operation;

        let user = await User.findOne({ userId: userId });
        user.operation = operation;
        user.save();

        res.status(200).json({
            message: `Operation for ${user.userId} changed to ${user.operation}`,
            user: user
        });

    } catch (error) {
        console.log(error);
    }
}

exports.getLocation = async (req, res, next) => {
    try {
        let userId = req.body.userId;
        let latitude = req.body.latitude;
        let longitude = req.body.longitude;

        let user = await User.findOne({ userId: userId });

        openCage(latitude, longitude, user.language, location => {
            user.location.latitude = latitude;
            user.location.longitude = longitude;
            user.location.geocoded = location;
            user.save();

            res.status(200).json({
                message: "Loaction found",
                location: location,
                user: user
            });
        });

    } catch (error) {
        console.log(error);
    }
}