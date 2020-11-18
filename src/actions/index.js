export const ADD_TODO = 'ADD_TODO'

let todoId = 1

export const addTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload: {
            status: 'Todo',
            title: payload.title,
            id: todoId++,
            date: payload.date,
            description: payload.description,
            place: payload.place,
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