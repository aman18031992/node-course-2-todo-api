const mongoose = require('mongoose')


var Users = mongoose.model('Users',{
    email : {
        type : String,
        required : true,
        trim : true,
        minlength : 1
    }
})

// var newUser = new Users({
//     email : 'amanshukla@example.com'
// })

// newUser.save().then((res) =>{
//     console.log(JSON.stringify(res,undefined,2));
// }, (e) =>{
//     console.log('Unable to save to server.');
// })

module.exports = {Users};