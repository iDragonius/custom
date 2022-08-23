import React from 'react'

const Modal = ({active, children}) => {
  console.log(active);
  return (
        <div className={active ? "modal-content active-modal" : "modal-content"} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
  )
}

export default Modal