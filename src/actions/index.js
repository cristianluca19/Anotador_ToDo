export const ADD_TODO = 'ADD_TODO'

let todoId = 1

export const addTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload: {
            status: 'todo',
            title: payload.title,
            id: todoId++,
            init_date: payload.init_date,
            description: payload.description,
            place: payload.place,
            created: payload.created
        }
    }
};

export const removeTodo = (payload) => {
    return {
        type: 'RemoveTodo',
        payload
    };
}

export const toInProgress = (payload) => {
    return {
        type: 'ToInProgress',
        payload
    };
}

export const toDone = (payload) => {
    return {
        type: 'ToDone',
        payload
    };
}