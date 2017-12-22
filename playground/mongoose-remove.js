const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// Todo.remove({}).then((res) =>{
//     console.log(res);
// })

Todo.findOneAndRemove({
    _id: new ObjectID("5a3d2593f3b2bc0a18497271")
    }).then((result)=>{
    console.log(result);
})

// Todo.find().then((res)=>{
//     console.log(res)
// })

// Todo.insertMany([{
//     text : "some 1" 
// },{
//     text :"Some 2"
// }]).then((res)=>{
//     console.log(res);
// })