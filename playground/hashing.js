const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data={
    id : 10
}

var token = jwt.sign(data,'secretsauce');
var decode = jwt.verify(token,'secretsauce');

console.log('token',token);
console.log('decoded',decode);









// var message = 'I am user number 3';
// var hash = SHA256(message).toString()

// console.log(`Message  : ${message} \n Hash: ${hash}`);

// var data ={
//     id : 4
// };

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data)+'somesecretsauce').toString()
// };
// console.log(token.hash);

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data)+'somesecretsauce').toString();
// console.log(resultHash);

// if(resultHash === token.hash){
//     console.log('Data was not changed.')
// } else{
//     console.log('Data was changed');
// }