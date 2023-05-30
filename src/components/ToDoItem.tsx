'use client'
type ToDOItemProps = {
  id : string,
  title : string,
  completed : boolean
  toggleToDO : (id : string, completed : boolean) => void
}


const ToDoItem = ({id, title, completed, toggleToDO } : ToDOItemProps) => {
  return (
    
    <li className="flex gap-1 items-center">
      <input id = {id} type = "checkbox" className="cursor-pointer peer "
             defaultChecked = {completed} 
             onChange={e=> toggleToDO(id, e.target.checked)}  />
      <label htmlFor={id} className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500 " >{title}</label>
    </li>
  )
}

export default ToDoItem
