import {atom, selector} from 'recoil';
import { Todo } from '../types/todoType';
import axios from 'axios';


export const todoAtom = atom<Todo []> ({
    key: 'todoAtom',
    default:[]
});

export const todoItemselector =selector({
    key : 'todoItemselector',
    get: ({get})=>({
        total : get(todoAtom).length,
        completed : get(todoAtom).filter((todo)=> !todo.isCompleted).length,
        pending : get(todoAtom).filter((todo)=> todo.isCompleted).length
    })
})

export const todoSelector = selector ({
    key : 'todoSelector',
    get: async () => {
        try {
            const response = await axios.get('https://localhost:5000/api/todos');
            return response.data;
        }catch(error){
            console.error('Error fetching todos: ', error);
            return [];
        }
    }
})