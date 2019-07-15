
export const fetchTodos = () => {
    return (dispatch) => {
      dispatch({type: 'LOADING_TODOS'})
      return fetch('http://localhost:3005/api/v1/user/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
        .then(data => {
            dispatch({type: 'FETCH_USER', payload: data})
            dispatch({type: 'USER_TODOS', payload: data.todos})
          }
        )
    }
}
