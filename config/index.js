var config = require('./config.json');

module.exports = {

    getDbConnectionString(){
        return "mongodb://" + config.uname + ":" + config.pwd + "**************"; //It's my mlab mongodb URL, cannot show it here.
    }

};
