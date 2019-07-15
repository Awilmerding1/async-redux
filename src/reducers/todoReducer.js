
export default function todoReducer(state ={loading:false, users: [], todos: []}, action) {
  console.log(action)
  switch (action.type) {
   case 'FETCHING_TODOS':
      return {...state, todos: action.payload, loading: false}
  case 'LOADING_TODOS':
     return {...state, loading: true}
    case 'FETCH_TODOS':
      return {...state, todos: action.payload, loading: false}
    case 'ADD_TODO':
      const todo = action.payload
      return {...state, todos: [...state.todos, todo], loading: false }
    default:
      return state;
    }
}
