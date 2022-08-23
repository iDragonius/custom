import React from 'react'

const ResponsiveSearchModal = ({active, children}) => {
  return (
    <div>
        <div className={active ? "modal-search-res active-modal-search" : "modal-search-res"} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default ResponsiveSearchModal