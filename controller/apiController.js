var Todos = require('../models/todomodel');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:false }));

    app.get('/api/todos/:uname', function(req,res){
        Todos.find({ user: req.params.uname }, function(err, results){
            if(err) throw err;

            res.send(results);
        })
    });

    app.get('/api/todos/:id', function(req,res){
        Todos.find({ _id: body.params.id }, function(err, results){
            if(err) throw err;
            
            res.send(results);
        })
    });

    app.post('/api/todos', function(req, res){ 
        if(req.body._id){
            Todos.findByIdAndUpdate(req.body._id, { user:req.body.user, todo:req.body.todo, isDone:req.body.isDone, attachMent:req.body.attachMent }, function(err){
                if(err) throw err;
                res.send('Update succeed');
            });
        }
        else{
            newTodo = Todos({
                user:req.body.user,
                todo:req.body.todo,
                isDone:req.body.isDone,
                attachMent:req.body.attachMent
            });
            newTodo.save(function(err){
                if(err) throw err;
                res.send('Create Succeed');
            });
        }
    });

    app.delete('/api/todos', function(req, res){
        Todos.findByIdAndRemove(req.body._id, function(err){
            if(err) throw err;
            res.send('Delete Succeed')
        });
    });
};