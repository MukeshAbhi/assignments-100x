import {atom, selector} from 'recoil';

export const todosAtom = atom({
    key:'todosAtom',
    default: []
});

export const completedTodos = selector({
    key: 'completedTodos',
    get: ({get}) => {
        const totalTodos = get(todosAtom);
        return totalTodos.filter((todo) => todo.completed === true)
    }
})