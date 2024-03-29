const Users = require('../models/user.models');
const jwt = require('jsonwebtoken');



const authorization = async (req,res,next) => {
    try {
        const token = req.header("Authorization");

        if(!token){
            return res.status(400).json({ msg: "You are not authorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
          return res.status(400).json({ msg: "You are not authorized" });
        }

        const user = await Users.findOne({_id: decoded.id});

        req.user = user;
        next();
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}



module.exports = authorization;