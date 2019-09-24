import React from 'react'

const Alert = ({alert}) => {
    // console.log(alert)
    return (
       alert !== null &&(
           <div className={`alert alert-${alert.type}`}>
               <i className="fas fa-info-circle"></i>
               <div>{alert.msg}</div>
           </div>
       ) 
    )
}

export default Alert
