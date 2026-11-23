import { useState } from "react";


const App = () => {
    const  [title, setTitle] = useState('');
    const [details, setDetails] = useState();
    const [task, setTask ] = useState([]);

  const submitHadler = (e)=>{
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title,details})

    setTask(copyTask)
    

    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx)=>{
   const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className="h-screen lg:flex bg-black text-white   ">
    
      <form onSubmit={(e)=>{submitHadler(e)}}
      className="flex  gap-4 lg:w-1/2 flex-col items-start p-10 ">
         <h1 className="text-3xl font-bold"> Add notes</h1>

        {/* First input  for heading */}
          <input
            type="text"
            placeholder="Heading"
            className="px-5 py-2 font-medium  w-full outline-none border-2 rounded"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          {/* detailed input */}
          <textarea
            type="text"
            className="px-5 h-30 w-full py-2 outline-none  border-2 rounded font-medium "
            placeholder="write  details"
            value={details}
            onChange={(e)=>{setDetails(e.target.value)}}
          />
          <button className="bg-white w-full active:bg-gray-300 ull font-medium  text-black px-5 py-2 rounded">
            Add Notes
          </button>
      
      </form>
      <div className=" lg:w-1/2  lg:border-l-2  p-10">
      <h1 className="text-3xl font-bold"> Recent notes</h1>
      <div className="flex flex-wrap justify-start items-start gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function(elem,idx){
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 rounded-xl p-4 pt-9 pb-4 px-4 bg-white text-black">
              <div>
              <h3 className="border-b-2 leading-tight text-xs font-bold">{elem.title}</h3>

              <p className="mt-4 leading-tigh text-sm text-bold font-semi text-gray-500">{elem.details}</p>

              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="w-full cursor-pointer bg-red-500 active:scale-95 text-white py-1 text-xs rounded-2xl">delete</button>
            </div>
          })}
      </div>
      </div>
    </div>
  );
};

export default App;
