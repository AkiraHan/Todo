var config = require('./config.json');

module.exports = {

    getDbConnectionString(){
        return "mongodb://" + config.uname + ":" + config.pwd + "@*********************"; // this is my mongodb URL, cannot show it here.
    }

};
