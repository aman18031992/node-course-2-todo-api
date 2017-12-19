const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Cannot connect to server.');
    }
    console.log('Connected to server.')

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //             _id : new ObjectID("5a391b66f4b6d238d8bf2051")
    //         }, {
    //             $set : {
    //                 completed : true
    //             }
    //         }, {
    //             returnOriginal : false
    //         })
    //         .then((results) =>{
    //             console.log(results);
    //         })


    db.collection('Users')
        .findOneAndUpdate({
            _id : new ObjectID("5a391f08615e9a290c61ff9f")
        },{
            $set :{
                name : "Aryan"
            },
            $inc : {
                age : 1
            }
        },{
            returnOriginal : false
        })
        .then((res) =>{
            console.log(res)
        })



    //db.close()        
})