var Todos = require('../models/todomodel');

module.exports = function(app){

    app.get('/setupTodos', function(req, res){
        var startTodos = [
            {
              "user": "AkiraHan",
              "todo": "BodyBuilding",
              "isDone": false,
              "attachMent": true
            },
            {
              "user": "MartinezKey",
              "todo": "Buy food",
              "isDone": false,
              "attachMent": true
            },
            {
              "user": "AkiraHan",
              "todo": "Coding",
              "isDone": true,
              "attachMent": false
            },
            {
              "user": "HolmanYang",
              "todo": "Buy food",
              "isDone": true,
              "attachMent": true
            },
            {
              "user": "MarksChristensen",
              "todo": "Buy food",
              "isDone": false,
              "attachMent": true
            },
            {
              "user": "HolmanYang",
              "todo": "BodyBuilding",
              "isDone": false,
              "attachMent": true
            },
            {
              "user": "LaurenGuthrie",
              "todo": "Coding",
              "isDone": true,
              "attachMent": false
            }
        ];
    
        Todos.create(startTodos, function(err, results){
            if(err) throw err;
            res.send(results);
        });
    });
    
}