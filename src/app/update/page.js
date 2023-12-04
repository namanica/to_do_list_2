import React from 'react'
import { updateTodo } from '../serverActions/actions'

export const page = ({params, searchParams}) => {
  return (
    <div className='addTodo'>
      <form action={updateTodo}>
        <span>Current todo = {searchParams.description}</span>
        <input type='text' name='description' placeholder='enter updated todo'/>
        <input type='hidden' name='id' value={params.id} readOnly/>
        <button className='update'>update todo</button>
      </form>
    </div>
  )
}
