import {todos} from './reducer';
import {createStore} from 'redux';

const defaultTodos = [
    { 
        id: 1,
        content: "React"
    },
    { 
        id: 2,
        content: "Redux"
    },
    { 
        id: 3,
        content: "react-router"
    },
];

const store = createStore(todos, defaultTodos);

export default store;