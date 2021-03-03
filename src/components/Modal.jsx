import React from 'react'
import './Modal.css'
import ClearIcon from '@material-ui/icons/Clear';

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return (
    <>
      <div className='Modal__cont' >
         <div className="Modal">
   
             <button onClick={onClose}><ClearIcon style={{color:'#095fcf'}}/></button>
                {children}
        </div>
      </div>
    </>
  )
}