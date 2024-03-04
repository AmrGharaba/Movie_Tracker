const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.findAllUsers = (req, res) => {
    User.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
        .then((allUsers) => {
            res.json({ Users: allUsers })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.json({ User: oneSingleUser })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            res.cookie("usertoken",//name of the cookie 
            jwt.sign({
                //payload is the data i want to save
                user_id: newlyCreatedUser._id,
                email: newlyCreatedUser.email,
                name: newlyCreatedUser.firstName                                    }, 
            process.env.JWT_SECRET),//used to sign/hash the data in the cookie
            {
                //configuration settings for this cookie
                httpOnly:true,
                expires: new Date(Date.now() + 900000)
            }
            
        )
        .json({
            message:"succesfly Registered!",
            newUser: newlyCreatedUser
        })
        })
        .catch(err => res.status(400).json(err))
}

module.exports.LoginUser = (req, res) => {
    User.findOne({ email: req.body.email})
    .then((userRecord) => {
        //check if this returned object is null
        if(userRecord === null){
            //email not found
            res.status(400).json({message: "Invalid login attempt!"});
        } else {
            // the email address was found
            //compare the address given to us in the request with the one stored in the db
            bcrypt.compare(req.body.password, userRecord.password)
                .then((isPasswordValid) => {
                    if(isPasswordValid) {
                        console.log('password is valid!');
                        console.log(userRecord);
                        console.log(process.env.JWT_SECRET);
                        res.cookie("usertoken",//name of the cookie 
                            jwt.sign({
                                //payload is the data i want to save
                                user_id: userRecord._id,
                                email: userRecord.email,
                                name: userRecord.firstName                                    }, 
                            process.env.JWT_SECRET),//used to sign/hash the data in the cookie
                            {
                                //configuration settings for this cookie
                                httpOnly:true,
                                expires: new Date(Date.now() + 900000)
                            }
                            
                        ).json({
                            message:"succesfly logged in!",
                            userLoggedIn: userRecord.firstName
                        })

                    }else{
                        //passwords didnt match
                        res.status(400).json({message: "Invalid login attempt!"});
                    }
                })
                .catch((err) => {
                    console.log(err)
                    res.status(400).json({message: "Invalid login attempt!"});
                })
        }
    })
    .catch((err) => {
        console.log("error with find one!")
        res.status(400).json({message: "Invalid login attempt!",err});
    })
}

module.exports.LogoutUser = (req, res) => {
    console.log("logging out!");
        res.clearCookie("usertoken"); //same name as a bove for saving the cookie
        res.json({
            message:"You have successfuly logged out!"
        })
}

module.exports.getUserByEmail = (req, res) => {
    User.findOne({ email: req.query.email }) // Use req.query.email to get the email from the request URL
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                } else {
                    res.json({ user });
                }
            })
            .catch((err) => {
                console.log("Error while getting user by email", err);
                res.status(500).json({ message: "Internal server error" });
            });
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({ User: updatedUser })
        })
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
