import React from 'react'
import useFirestore from '../hooks/useFirestore'
const ImageGrid = ({setSelectimg}) => {
  const {docs} = useFirestore('images')
  console.log(docs)
  return (
    <div className='img-grid'>
      {docs && docs.map(doc => (
        <div className='img-wrap' onClick={()=> setSelectimg(doc.url)} key={doc.id}>
          <img src={doc.url} alt="image gallery" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid