export function TaskCard({title,id,point}){
  return(
    <div className='bg-gray-50 border rounded-lg px-2 m-2'>
      <div className='text-base font-semibold py-2'>
        {title}
      </div>
      <div className='flex gap-4 justify-between text-gray-700 py-2'>
        <div>{id}</div>
        <div>{point}</div>
      </div>
    </div>
  )

}
