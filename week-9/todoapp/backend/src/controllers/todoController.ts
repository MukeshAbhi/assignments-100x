import { Request,Response } from "express";
import prisma from "../prismaClient";

export const getTodos = async (req: Request, res: Response)=>{
    try{
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({message: "error fetching todos"});
    }
};

export const addTodos = async (req: Request, res: Response)=>{
    const {title,description } = req.body;
    try{
        const newTodo = await prisma.todo.create({
            data:{
                title,
                description
            }
        });
        res.status(200).json({newTodo,
            message: "Todo added successful"
        })
    }catch(error){
        res.status(500).json({
            message: 'Error adding todo'
        });
    }
};

export const updateTodo = async (req: Request, res: Response)=>{
    const {id} = (req.params);
    const {isCompleted} = req.body;
    try {
       const updateTodo =  await prisma.todo.update({
            where:{id:Number(id)},
            data: {isCompleted}
        });
        res.status(200).json(updateTodo);
    }catch(error){
        res.status(500).json({
            message: "Error updating todo"
        })
        console.log(error);
    }
};

export const deleteTodo = async (req: Request, res: Response)=>{
    const {id} = req.params;
    try{
        await prisma.todo.delete({
            where:{id:Number(id)}
        });
        res.status(200).json({message:"Todo deleated successfully"});
    }catch(error){
        res.status(500).json({messsage:"Error deleting todo"});
    }
};