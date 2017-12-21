const mongoose = require('mongoose')

var Todo = mongoose.model('Todo',{
    text : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt :{
        type : Number,
        default : null
    }
});

// var newTodo = new Todo({
//     text : ' Edit the video. '
// });


// newTodo.save().then((res) =>{
//     console.log(res);
// }, (e) => {
//     console.log('Unable to save to server.', e);
// })

// var newTodo2 = new Todo ({
//     text : "buying 100M mansion",
//     completed : true,
//     completedAt : 1803
// });

// newTodo2.save().then((res) =>{
//         console.log(JSON.stringify(res,undefined,2));
// },(e) =>{
//         console.log('Unable to save to server.',e);
// })


module.exports = {Todo};