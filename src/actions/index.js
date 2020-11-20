export const ADD_TODO = 'ADD_TODO'

let todoId = 1

export const addTodo = (payload) => {
    console.log('pauload', payload)
    return {
        type: 'ADD_TODO',
        payload: {
            status: 'todo',
            title: payload[0],
            id: todoId++,
            description: payload[1],
            place: payload[2],
            created: payload[4],
            point: payload[3]
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