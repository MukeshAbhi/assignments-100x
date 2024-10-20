import { Router } from "express";
import { addTodos, deleteTodo, getTodos, updateTodo } from "../controllers/todoController";


const router = Router();

router.get('/todos',getTodos);
router.post('/todos',addTodos);
router.put('/todos/:id',updateTodo);
router.delete('/todos/:id',deleteTodo);

export default router;