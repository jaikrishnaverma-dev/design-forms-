import React from 'react'
const Cards = ({title,extraClass,children,subtitle,func}:any) => {
  return (
    <div className={`card ${extraClass}`}>
        <div onClick={func} className="w100 row flexBetween mb-20">
           <h3 className="" >
              {title}
            </h3>
            <h3 className="" >
           {subtitle}
            </h3>
        </div> 
           {children}
          </div>
  )
}

export default Cards