let id = 1;
export function Todo({todos}){
    return(
      <>
        {todos.map((todo) => {
            return(
                <div key = {id++}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                    <button >{todo.completed == true ? "Completed" : "Mark as completed"}</button>
                </div>
            )
        })}
      </>
    )
  }
  