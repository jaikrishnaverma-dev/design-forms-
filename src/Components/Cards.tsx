import React from 'react'
const Cards = ({title,extraClass,children,subtitle,func}:any) => {
  return (
    <div className='card'>
        <div onClick={func} className="card__head w100 row">
           <h3 className="" >
              {title}
            </h3>
            <h3 className="" >
           {subtitle}
            </h3>
        </div>
        <div className={`card__body w100 row ${extraClass}`}>
        {children}
        </div> 
          
          </div>
  )
}

export default Cards