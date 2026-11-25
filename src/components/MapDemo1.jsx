import React from 'react'

export const MapDemo1 = () => {

    var names = ["ram","shyam","amit","sumit","kumal"]

  return (
    <div>
        {
            names.map((n)=>{
                return <li>{n}</li>
            })
        }
    </div>
  )
}
