import React from 'react'

const Modal = ({selectimg, setSelectimg}) => {
  const handleClick = (e) =>{
    if(e.target.classList.contains('backdrop')){

      setSelectimg(null)
    }
  }
  return (
    <div className='backdrop' onClick={handleClick}>
      <img src={selectimg} alt="" />
    </div>
  )
}

export default Modal