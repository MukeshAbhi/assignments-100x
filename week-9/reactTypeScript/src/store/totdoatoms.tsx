import {atom, selector} from 'recoil';
import { Todo } from '../types/type';

export const todoAtom = atom<Todo[]>({
    key : 'todoAtom',
    default : []  ,
})

export const filterSelector = selector({
    key : 'filterSelector',
    get : ({get}) => ({
        total: get(todoAtom).length,
        completed: get(todoAtom).filter((todo)=> todo.completed ).length,
        pending : get(todoAtom).filter((todo)=> !todo.completed).length,
    })
})