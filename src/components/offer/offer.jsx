import React from 'react'

const Offer = ({item}) => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
        <div className=" flex flex-col  justify-center items-center w-[220px] h-[200px] border-4 shadow-lg">
            <div className="flex">{item.label}</div>
            <br />
            <div className="flex flex-col">{item.content}</div>
            
        </div>
    </div>
  )
}

export default Offer