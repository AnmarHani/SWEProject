const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { isEmail } = require('validator')
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    personalInformation: {
        name: { 
            type: String
        },
        description: {
            type: String
        },
        gender: {
            type: String
        },
        major: {
            type: String
        },
        intrestedIn: {
            type: String 
        },
        phoneNumber: {
            type: String
        }
    },
    token: {
        type: String
    },
    email: { 
        type: String, 
        required: [true, 'Please enter an email'], 
        unique: true, 
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: { 
        type: String, 
        required: [true, 'Please enter a password'], 
        minlength: [8, 'Minimum length is 8 characters'],
        select: false
    },
    isAdmin: { 
        type: Boolean, 
        default: false
    },
    contents: [{
        type: Schema.Types.ObjectId,
        ref: "Content"
    }],
    score: { 
        type: Number, 
        default: 0
    },
    submittions: [{
        type: Schema.Types.ObjectId,
        ref: "Content"
    }]
});

// // Pre refers to pre-save of a user model (before saving a user model)
// userSchema.pre('save', async function(next) {
//     // const salt = await bcrypt.genSalt();
    
//     // // This refers to the user instance before it is saved to the db
//     // this.password = await bcrypt.hash(this.password, salt)
    
//     // this.password = bcrypt.hashSync(this.password, 0);

//     // console.log(this.password)
//     next();
// })

// // Create a static login function to easily login on the controller
// userSchema.statics.login = async function(email, password){
//     const user = await this.findOne({ email })
//     // console.log(user.password)
//     if (user) {
//         // const isEqual = await bcrypt.compare(password, user.password)
//         // const isEqual = bcrypt.compareSync(password, user.password)
//         // console.log(isEqual)
//         const isEqual = password === user.password;

//         if (isEqual) {
//             return user;
//         }
//         throw Error('Invalid password');
//     }
//     throw Error('Invalid email');
// }

const User = mongoose.model('User', userSchema);

module.exports = User;