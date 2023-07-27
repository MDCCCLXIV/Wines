import React from 'react'

const Pagination = ({productPerPage,totalProducts,setPage}) => {
    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(totalProducts / productPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <div className='w-full flex mx-auto justify-items-center p-2'>
        <ul className='flex mx-auto'>
            {
                pageNumbers.map((number)=>{
                    return(
                        <li key={number} className='flex border  text-base mx-1'><a className="p-2 mx-1" onClick={()=>setPage(number)} href="#">{number}</a></li>
                    )
                })
            }
           
        </ul>
    </div>
  )
}

export default Pagination