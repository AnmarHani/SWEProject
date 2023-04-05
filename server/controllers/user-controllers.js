const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');



const User = require('../models/user-model')

/* Start Helper Functions */
const createToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_KEY)
}
/* End Helper Functions */

/* Start Guest Controllers */
    const register = async (req, res) => {
        const { email, password } = req.body;
        
        try {
            if(!email && !password) return

            const user = await User.create({
                email,
                password: bcrypt.hashSync(password, 10)
            });
            const token = createToken(user._id)

            user.token = token;
            user.personalInformation = {
                name: "",
                description: "",
                gender: "",
                major: "",
                intrestedIn: "",
                phoneNumber: ""
            }
            user.save();

            res.json({
                "user": {
                    "id": user._id,
                    "personal_information": user.personalInformation,
                    "email": user.email,
                    "score": user.score,
                    "submittions": user.submittions,
                    "is_admin": user.isAdmin
                },
                "token": token 
            });
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const login = async (req, res) => {
        const { email, password } = req.body

        try {
            const user = await User.findOne({email})
            if(user){
                let isEqual = bcrypt.compareSync(password, user.password)
                if (isEqual) {
                    const token = createToken(user._id)

                    user.token = token;
                    user.save();
                    res.status(200).json({
                        "user": {
                            "id": user._id,
                            "personal_information": user.personalInformation,
                            "email": user.email,
                            "score": user.score,
                            "submittions": user.submittions,
                            "is_admin": user.isAdmin
                        },
                        "token": token
                    })
                }else{
                    console.log("invalid pass")
                }
            }else{
                console.log("invalid user")
            }
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const leaderboard = async (req, res) => {
        try {
            const users = await User.find({}).sort({score: -1}).limit(10);

            res.status(200).json({
                "leaderboard": users
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }
/* End Guest Controllers */

/* Start Authenticated Controllers */
    const getUser = async (req, res) => {
        const { id } = req.params;

        try {
            const user = await User.findById(id);

            res.status(200).json({
                "user": user
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }
    
    const getRequestedUser = async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            res.json({
                "user": user
            })
        }catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const updateCredentials = async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.user.id, req.body);

            res.status(200).json({
                "updated_user": user
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const createProfile = async (req, res) => {
        //Add Personal Information To The User Only (Named it Profile)
        // const { 
        //     name,
        //     description,
        //     gender,
        //     major,
        //     intrestedIn,
        //     phoneNumber
        // } = req.body.personalInformation;

        try {
            const user = await User.findByIdAndUpdate(req.user.id, req.body);

            res.status(200).json({
                "updated_user": user
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }
/* End Authenticated Controllers */

/* Start Admin Controllers */
    const allUsers = async (req, res) => {
        // const user = await User.findById(req.user.id);
        // no longer for admin only
        // if(!user.isAdmin) return res.send(403);

        try {
            const users = await User.find({});

            res.status(200).json({
                "users": users
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const addPoints = async (req, res) => {
        const { id } = req.params;
        const { points } = req.body;
    
        const user = await User.findById(req.user.id);

        if(!user.isAdmin) return res.send(403);
    
        try {
            const user = await User.findByIdAndUpdate(id, {
                score: user.score + points
            });

            res.status(200).json({
                "user": {
                    "personal_information": user.personalInformation,
                    "email": user.email,
                    "score": user.score,
                    "submittions": user.submittions
                } 
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }
/* End Admin Controllers */
    
    
    
module.exports = {
    // GET
    allUsers,
    getUser,
    getRequestedUser,
    leaderboard,
    
    // POST
    register,
    login,

    // PUT
    addPoints,
    updateCredentials,
    createProfile,

    // DELETE
}