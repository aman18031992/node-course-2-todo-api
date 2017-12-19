 const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server ', err);
    }
    console.log("Connected to the MongoDB server.")

    // db.collection('Todos')
    //     .find({
    //         _id : new ObjectID("5a391b66f4b6d238d8bf2051")
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log(docs.length);
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs,undefined,2));
    //     }, (err) =>{
    //             console.log('Unable to fetch data.')
    //     });
    



    
//     db.collection('Todos')
//     .find()
//     .count()
//     .then((count) => {
// //        console.log(docs.length);
//         console.log('Todos count : ',count);
// //        console.log(JSON.stringify(docs,undefined,2));
//     }, (err) =>{
//             console.log('Unable to fetch data.')
//     });

//    //db.close();

    
    db.collection('Users')
        .find({
            name : "Aman"
        })
        .toArray()
        .then((docs) =>{
            console.log(JSON.stringify(docs,undefined,2));
        }, (err) =>{
            console.log('Unable to fetch data.');
        })

})




