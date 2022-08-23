import {React, useState} from 'react'
import ResponsiveSearchModal from './ResponsiveSearchModal'

const ResponsiveSearch = () => {
  const [activeModal, setActiveModal] = useState(false)
  return (
    <div className="header-search search-responsive">
    <div>
        <svg  viewBox="0 0 24 24" className="input_prefix ng-star-inserted" width= "24px" height="24px"><path  fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
        <input type="text" name="" placeholder="рестораны, еда и напитки" onFocus={()=>setActiveModal(true)} onBlur={()=>setActiveModal(false)} />
    </div>
    <ResponsiveSearchModal active={activeModal} >
          <div> Trends </div>
          <ul>
              <li>#burger</li>
              <li>#pizza</li>
              <li>#steak</li>
              <li>#chicken</li>
              <li>#kebab</li>
              <li>#salad</li>
              <li>#tantuni</li>
              <li>#sandwich</li>
              <li>#doner</li>
              <li>#sushi</li>
              <li>#lahmacun</li>
          </ul>
    </ResponsiveSearchModal>
    </div>
  )
}

export default ResponsiveSearch