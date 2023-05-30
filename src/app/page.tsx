import ToDoItem from '@/components/ToDoItem';
import { prisma } from '@/db'

import Link from 'next/link'

function getTodos(){
  return prisma.todo.findMany();

}

async function toggleToDO(id : string , completed : boolean){
  "use server"
  await prisma.todo.update({where : {id}, data : {completed}})
}

export default async function Home() {

  const todos = await getTodos();
  // await prisma.todo.create({data : {title : 'test', completed : false} })
  return (
    <>
    <header className='flex justify-between items-center mb-4' >
      <h1 className='text-2xl'>To Do List</h1>
      <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded
       hover:bg-slate-700 focus-within:bg-slate-700 outline-none '
       href = "/new"> New 
      </Link>
    </header>

    <ul className='pl-4'>
      {todos.map(todo => (
        <ToDoItem key = { todo.id}  {...todo} toggleToDO={toggleToDO} />
      ))}

    </ul>
    </>
  )
}
