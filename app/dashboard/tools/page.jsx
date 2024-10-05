import React from 'react'

const page = () => {

  const tableArr = [
    {
      fileName: "Hello world",
      fileSize : "3.42 MBs"
    },
    {
      fileName: "Hello world",
      fileSize : "3.42 MBs"
    },
    {
      fileName: "Hello world",
      fileSize : "3.42 MBs"
    },
    {
      fileName: "Hello world",
      fileSize : "3.42 MBs"
    },
    {
      fileName: "Hello world",
      fileSize : "3.42 MBs"
    },
  ]
  return (
    <>
      <div>
      <div className='overflow-x-auto'>
          <table className='w-full overflow-x-auto border border-[#E9ECFC]'>
            <thead>
              <tr className='bg-[#F6F7F9] border border-[#E9ECFC]'>
                <th className='text-start p-4 px-6 max-sm:text-sm max-sm:p-2 max-sm:px-4'>File Name</th>
                <th className='text-start p-4 px-6 max-sm:text-sm max-sm:p-2 max-sm:px-4'>Size</th>
                <th className='text-center p-4 px-6 max-sm:text-sm max-sm:p-2 max-sm:px-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
                {tableArr.map((item, index)=>{
                  return <tr key={index}>
                  <td className='p-4 px-6 max-sm:p-2 max-sm:px-4 max-sm:text-sm bg-white border-y border-[#E9ECFC] '>
                    <p>{item.fileName}</p>
                    
                  </td>
                  <td className='p-4 px-6 max-sm:p-2 max-sm:px-4 max-sm:text-sm bg-white border-y border-[#E9ECFC]'>
                    {item.fileSize}
                    
                    </td>
                  <td className='p-4 px-6 max-sm:p-2 max-sm:px-4 max-sm:text-sm bg-white border-y border-[#E9ECFC] text-center'>
                    <button className='p-2 px-4 bg-[#012555] transition-all hover:bg-[#012555d0] rounded-xl text-white'>Download File</button>
                  </td>
                </tr>
                })}
                  
              
            </tbody>
          </table>
          
          
        </div>
      </div>
    </>
  )
}

export default page