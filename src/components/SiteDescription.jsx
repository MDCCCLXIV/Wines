import React from 'react'

const SiteDescription = () => {
  return (
    <div className='w-[50%] h-full flex p-2'>
        <div className="flex flex-col mx-auto p-1 mt-[20%]">
            <p className='text-6xl text-left font-light' ><span className='text-red-500'>Webwines</span> provides and features over 3000 varieties of liquor</p>
            <button className='bg-red-500 mx-0 w-[200px] mt-6 text-2xl border rounded-lg p-2 text-white  hover:bg-red-700'>Get Liquor</button>
        </div>    
    </div>
  )
}

export default SiteDescription