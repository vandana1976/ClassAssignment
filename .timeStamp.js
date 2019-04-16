
const moment = require('moment');

const timeStamp = {            // creating timeStamp module
    
    getTime(){
        console.log(new moment().format("h:mm:ss a"));
    }
}
module.exports = timeStamp;