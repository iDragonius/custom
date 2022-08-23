import React from 'react'

const ModalLang = ({active, children}) => {
  console.log(active);
  return (
        <div className={active ? "modal-lang active-modal" : "modal-lang"} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
  )
}

export default ModalLang