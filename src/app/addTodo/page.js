import React from 'react'
import { addTodo } from '../serverActions/actions'

export const page = () => {
  return (
    <div className='addTodo'>
      <form action={addTodo}>
        <input type='text' name='description' className='form-input'
        placeholder='enter your todo'
        />
        <button>add todo</button>
      </form>
    </div>
  )
}
