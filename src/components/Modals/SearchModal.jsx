import React from 'react'

const SearchModal = ({active, children}) => {
  return (
    <div>
        <div className={active ? "modal-search active-modal-search" : "modal-search"} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default SearchModal