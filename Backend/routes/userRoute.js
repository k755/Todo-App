import { Router } from 'express';
import Todo from '../models/user.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

   routes.get('/', async (req, res) => {
    const todo = await Todo.find();
    res.send(todo);
});

  routes.get('/:id', async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    res.send(todo);
});

    routes.patch('/:id', async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        todoStatus: true,
    })
    res.send(todo)
})
 
    routes.post('/create', async (req, res) => {
    const {todoName, todoDescription,todoPriority, todoStatus} = req.body;
    const todo = await Todo.create({
        todoName,
        todoDescription,
        todoPriority,
        todoStatus
    })
    res.send(todo);
    console.log(todo);
});

routes.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    res.send(todo);
})

export default routes;
