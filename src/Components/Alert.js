import React from 'react'

const Alert = (props) => {
  return (
   <>
   <div style={{height:'60px'}}>
  {  props.alert && <div className="alert alert-primary" style={{height:'100%'}} role="alert">
    {props.alert.msg}
  </div> }
  </div> 
   </>
  )
}

export default Alert
