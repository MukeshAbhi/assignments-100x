const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require('fs');
  
  const app = express();

  app.use(bodyParser.json());

  function removeAtIndex (arr,index) {
    let newArray = [];
    for ( let i = 0; i < arr.length; i++){
        if( i !== index){
            newArray.push(arr[i]);
        }
    }
    return newArray;
  }

  app.get('/todos', (req,res) => {
    fs.readFile('todos.json','utf-8',(err,data) => {
        if(err){
            throw err;
        }
        res.status(200).json(JSON.parse(data));
    })
    
  });

  app.get('/todos/:id',(req,res)=> {
    fs.readFile('todos.json','utf-8',(err,data) => {
        if(err){
            throw err;
        }
        const todos  = JSON.parse(data);
        const todo  = todos.find(t => t.ID === parseInt(req.params.id));
        if (!todo) {
        res.status(404).send();
        } else {
        res.json(todo);
        }
    });
  });
  
  app.post('/todos',(req,res) => {
      const newTodo = {
        ID : Math.floor(Math.random() * 1000000),
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description,
      };
      fs.readFile('todos.json','utf-8',(err,data) => {
        if(err){
            throw err;
        }
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile('todos.json',JSON.stringify(todos),(err) => {
            if (err){
                throw err;
            } 
            res.status(201).json(newTodo);
        });
    });
      
  });

  app.put('/todos/:id', (req,res) => {
    fs.readFile('todos.json','utf-8',(err,data) => {
        if(err){
            throw err;
        }
        const todos  = JSON.parse(data);
        const todoIndex = todos.findIndex(t => t.ID === parseInt(req.params.id));
        if (todoIndex === -1){
        res.status(404).send();
        } else {
            const updatedTodo = {
                ID : todos[todoIndex].id,
                title: req.body.title,
                completed: req.body.completed,
                description: req.body.description
            };
            todos[todoIndex] = updatedTodo;
            fs.writeFile('todos.json',JSON.stringify(todos),(err) => {
                if (err){
                    throw err;
                } 
                res.status(200).json(updatedTodo);
            });
        }
    });
    
    
  });

  app.delete('/todos/:id',(req,res)=> {
    fs.readFile('todos.json','utf-8',(err,data) => {
        if(err){
            throw err;
        }
        let  todos = JSON.parse(data);
        const ID = parseInt(req.params.id);
        const todoIndex = data.findIndex(t => t.ID === ID);
        if (todoIndex === -1) {
            res.status(404).send();
          } else {
            todos = removeAtIndex(todos, todoIndex);
            fs.writeFile('todos.json',JSON.stringify(todos),(err) => {
                if (err){
                    throw err;
                }
                res.status(200).send();
            });
          }
    });
  });

  app.all('*',(req,res) => {
    res.status(404).send();
  });
 
 
  app.listen(3000);