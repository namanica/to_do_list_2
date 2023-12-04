import { DeleteIcon } from "./Deleteicon"
import { deleteTodo } from "../serverActions/actions"

export const Delete = ({id}) => {
  return (
    <form action={deleteTodo}>
      <input type="hidden" name="id" value={id} />
      <button>
        <DeleteIcon className='icon' />
      </button>
    </form>
  )
}

