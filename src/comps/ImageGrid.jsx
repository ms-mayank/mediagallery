import React from 'react'
import useFirestore from '../hooks/useFirestore'
import Images from './Images'
const ImageGrid = ({ setSelectimg }) => {
  const { docs } = useFirestore('images')

  return (
    <div className='img-grid'>
      {docs && docs.map(doc => (
        <Images setSelectimg={setSelectimg} docu={doc} key={doc.id}/>
      ))}
    </div>
  )
}

export default ImageGrid