const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// var id = "5a3c459917c3e1267c88f111";

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid.')
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo) =>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('Todo not found');
//     }
//     console.log('Todo',todo);
// }).catch((e)=>console.log(e));

var id = "5a3a5a6a0db7f80b40269656";

Users.findById(id).then((user)=>{
    if(!user){
        console.log('User not found')
    }
    console.log('User ',JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
