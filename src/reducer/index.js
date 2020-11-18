import { ADD_TODO } from '../actions/index'



const initialState =[];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,{
          date: action.payload.date,
          description: action.payload.description,
          id: action.payload.id,
          place: action.payload.place,
          status: action.payload.status,
          title: action.payload.title
        }
      ]
    case 'RemoveTodo':
      const tmp = state.filter(a => action.payload !== a.id)
      return [
        ...tmp
      ]
    case 'ToInProgress':
      return state.map(el => ({
        ...el,
        status: 'InProgress'
      }))
    case 'ToDone':
      return state.map(el => ({
        ...el,
        status: 'Done'
      }))
    default:
      return state;
  }
}

export default todos;
