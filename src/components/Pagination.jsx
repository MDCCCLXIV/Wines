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
                        <li className='flex p-2 border m-1'><a onClick={()=>setPage(number)} href="#">{number}</a></li>
                    )
                })
            }
           
        </ul>
    </div>
  )
}

export default Pagination