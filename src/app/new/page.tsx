
import { redirect } from "next/navigation";
import Link from "next/link"
import { prisma } from "@/db";


// when submitting or create the form need to connect with server action and make a function below. 
 async function createToDO(data : FormData){
  'use server' 
  //gettinf the value of tilte -- input name with title
  const title = data.get("title")?.valueOf()
  if(typeof title !== "string" || title.length === 0 ){
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({data : {title, completed : false}})

  redirect('/')
 }



const newToDo = () => {
  return (
  <>
    <header className='flex justify-between items-center mb-4' >
      <h1 className='text-2xl'>New</h1>
    </header>
    <form action = {createToDO} className="flex gap-2 flex-col">
      <input type="text"
      name="title"
      className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100 " />

      <div className="flex gap-1 justify-end">
        <Link href = '..' className="border border-slate-300 text-slate-300 px-2 py-1 rounded
       hover:bg-slate-700 focus-within:bg-slate-700 outline-none" >
        Cancel
        </Link>

        <button type = 'submit' className="border border-slate-300 text-slate-300 px-2 py-1 rounded
       hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
        Create
       </button>
      </div>
    </form>
  </>
  )
}

export default newToDo
