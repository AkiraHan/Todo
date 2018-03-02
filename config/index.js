var config = require('./config.json');

module.exports = {

    getDbConnectionString(){
        return "mongodb://" + config.uname + ":" + config.pwd + "@ds249418.mlab.com:49418/nodetodosample";
    }

};