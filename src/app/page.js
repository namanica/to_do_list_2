import Image from 'next/image'
import styles from './page.module.css'
import connectMongoDB from "../../libs/connect"
import Todo from '../../models/TodoModel';
import Link from 'next/link';
import { PlusIcon } from './components/PlusIcon';
import { EditIcon } from './components/EditIcon';
import Delete from './components/Delete';

async function getTodos() {
  try {
    connectMongoDB();
    const todos = await Todo.find({});
    if(!todos) {
      throw new Error("couldn't fetch the todos");
    }
    return todos;
  } catch (error) {
    console.log("error while fetching the todos");
  }
}

export default async function Home() {
  const data = await getTodos();
  // let length = data.length;
  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>Todo App</h1>
        <span className='plusbtn'>
          <Link href="/addTodo">
            <PlusIcon className='icon plus' />
          </Link>
        </span>
        {
            data.length > 0 && (
            <div className='todo-list'>
              {
                data.map((todo) => {
                  <div className='list' key={todo._id}>
                    <li>{todo.description}</li>
                    <div className='iconWrapper'>
                      <Delete id={todo._id.toString()} />
                      <span>
                        <Link href={{
                          pathname: `/update/${todo._id}`,
                          query: {description: todo.description},
                        }}
                        >
                        <EditIcon className='icon'/>
                        </Link>
                      </span>
                    </div>
                  </div>
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}