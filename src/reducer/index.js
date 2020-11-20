import { ADD_TODO, REVIEWS , COMPLETE, REMOVE} from '../actions/index'



const initialState =[];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,{
          init_date: new Date(),
          description: action.payload.description,
          id: action.payload.id,
          place: action.payload.place,
          status: action.payload.status,
          title: action.payload.title,
          created: action.payload.created,
          point: action.payload.point
        }
      ]
    case REMOVE:
      const tmp = state.filter(a => action.payload !== a.id)
      return [
        ...tmp
      ]
    case REVIEWS:
      const aux = state.filter(a => action.payload.id !== a.id)
      return[
        ...aux,{
          init_date: new Date(),
          description: action.payload.description,
          id: action.payload.id,
          place: action.payload.place,
          status: action.payload.status,
          title: action.payload.title,
          created: action.payload.created,
          point: action.payload.point
        }
      ]
    case COMPLETE:
      const auxi = state.filter(a => action.payload.id !== a.id)
      return[
        ...auxi,{
          init_date: new Date(),
          description: action.payload.description,
          id: action.payload.id,
          place: action.payload.place,
          status: action.payload.status,
          title: action.payload.title,
          created: action.payload.created,
          point: action.payload.point
        }
      ]
    default:
      return state;
  }
}

export default todos;
