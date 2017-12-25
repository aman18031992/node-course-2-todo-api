const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var newUser = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        trim : true,
        minlength : 1,
        unique : true,
        validate : {
            validator : validator.isEmail,
            message : "{VALUE} is not a valid email" 
        }
    },
    password :{
        type : String,
        required : true,
        minlength : 6
    },
    tokens:[{
      access : {
          type : String,
          required : true
      },
      token : {
          type : String,
          required : true
      }  
    }]
});

newUser.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject,['_id','email']);
}

newUser.methods.generateAuthToken = function (){
    var user = this;
    var access ='auth'
    var token = jwt.sign({_id : user._id.toHexString(),access},'abc123').toString();

    user.tokens.push({access,token});

    return user.save().then(()=>{
        return token;
    })
}

var User = mongoose.model('User',newUser);

// var newUser = new Users({
//     email : 'amanshukla@example.com'
// })

// newUser.save().then((res) =>{
//     console.log(JSON.stringify(res,undefined,2));
// }, (e) =>{
//     console.log('Unable to save to server.');
// })

module.exports = {User};