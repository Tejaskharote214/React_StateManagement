export const TodoItem = ({todo, checkStatus})=>{
    return <div>{todo.title}-{todo.staus ? "Done" : "NotDone"}
    <button onClick={()=>checkStatus(todo.id)}>Check Status</button>
    </div>
}