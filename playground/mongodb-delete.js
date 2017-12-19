// const {MongoClient,ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
//     if(err){
//         return console.log('Unable to connect to server.', err);
//     }
//     console.log('Connected to the server.')

//     // db.collection('Todos')
//     //     .deleteOne({test : "eat lunch"})
//     //     .then((result)=>{
//     //         console.log(result);
//     //     })

//     // db.collection('Todos')
//     //     .deleteMany({test : "eat lunch"})
//     //     .then((res) =>{
//     //         console.log(res);
//     //     })

//     // db.collection('Todos')
//     //     .findOneAndDelete({text : "running"})
//     //     .then((res) =>{
//     //         console.log(res);
//     //     })



//     //db.close();
// })




const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) => {
    if(err){
       return console.log('Unable to connect to server.',err)
    }
    console.log('Connected to the server')

    db.collection('Users')
        .findOneAndDelete({
            _id: new ObjectID("5a391e418b168d2becb17b45")
        })
        .then((res) =>{
            console.log(res);
        })    

    db.collection('Users')
        .deleteOne({name : "Aman"})
        .then((res)=>{
            console.log(res);
        })    
    //db.close()
})


























