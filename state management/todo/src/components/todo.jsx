import { useState } from "react"
import { TodoItem } from "./todoItem";
import { TodoInput } from "./todoList"
import {nanid, nanoid} from "nanoid"

function Todo()
{
    const [todoList, setTodoList] = useState([]);

    const getData = (todo)=>{
        const payload = {
            title : todo,
            status : false,
            id : nanoid(5)
        }
        setTodoList([...todoList,payload])
    }

    const checkStatus = (id)=>{
        console.log(id)
       
        // setTodoList(
        //     todoList.map((e)=> (e.id===id ? {...e, status: !e.status} : e))
        // )

        const newArr = todoList.map((e)=>{
            if(e.id === id)
            {
                return {
                    ...e,
                    status : !e.status
                }
            }
            return e;
        })

        setTodoList(newArr)
    }
    return(
        <div>
            <TodoInput getData={getData} />
            {todoList.map((e)=>(
                <TodoItem checkStatus={checkStatus} todo={e} />
            ))}
        </div>
    )
}

export {Todo}