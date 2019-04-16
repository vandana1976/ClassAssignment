
const Request = require('request-promise');
const dataAccess = {          //creating dataAccess module
    
    getPost(postID){
        Request( `http://jsonplaceholder.typicode.com/posts/${postID}`) 
       .then(resp => console.log(resp));
    }
}
module.exports = dataAccess;
