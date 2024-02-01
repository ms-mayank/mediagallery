import React, {useEffect} from 'react'
import useFirestore from '../hooks/useFirestore'
import Images from './Images'
const ImageGrid = ({ setSelectimg, setFilelen }) => {
  const { docs } = useFirestore('images')
  
  useEffect(() => {
    
    setFilelen(docs.length)
  }, [docs])


  return (
    <div className='img-grid'>
      
      {docs.length!==0 ? docs.map(doc => (<Images setSelectimg={setSelectimg} docu={doc} key={doc.id}/>)) : <h3 style={{textAlign: "center"}}>Start Adding Images</h3>}
      
    </div>
  )
}

export default ImageGrid