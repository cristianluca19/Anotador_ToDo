export const ADD_TODO = 'ADD_TODO'
export const REVIEWS ='REVIEWS'
export const COMPLETE='COMPLETE'
export const REMOVE ='REMOVE'
export const TODO= 'TODO'

let todoId = 1

export const addTodo = (payload) => {
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

export const remove = (payload) => {
    return {
        type: 'REMOVE',
        payload
    };
}

export const reviews = (payload) => {
    return {
        type: 'REVIEWS',
        payload: {
            status: 'reviews',
            title: payload.title,
            id: payload.id,
            description: payload.description,
            place: payload.place,
            created: payload.created,
            point: payload.point
        }
    };
}

export const complete = (payload) => {
    return {
        type: 'COMPLETE',
        payload: {
            status: 'complete',
            title: payload.title,
            id: payload.id,
            description: payload.description,
            place: payload.place,
            created: payload.created,
            point: payload.point
        }
    };
}
export const todo = (payload) => {
    return {
        type: 'TODO',
        payload: {
            status: 'todo',
            title: payload.title,
            id: payload.id,
            description: payload.description,
            place: payload.place,
            created: payload.created,
            point: payload.point
        }
    };
}