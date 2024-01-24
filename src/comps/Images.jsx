import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { getStorage, ref, deleteObject } from "firebase/storage";
import { app } from '../firebase/config'
import { getFirestore, doc, deleteDoc } from 'firebase/firestore'
import Tooltip from './tooltip/Tooltip';
// import { BiSolidLike } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";


const Images = ({ setSelectimg, docu }) => {
  const [delText,setDelText] = useState('Delete');
  const [tipClass,setTipClas] = useState('tooltiptext')
  const storage = getStorage();
  const db = getFirestore(app)
  
  const setDelImg = (delimg, delId) => {
    const desertRef = ref(storage, delimg);
    setTipClas('tooltipactive')
    setDelText('Deleting...')
    deleteObject(desertRef).then(async () => {
      console.log('deleted', docu.id)
      await deleteDoc(doc(db, "images", delId));
    }).then(() => { console.log('updated store') }).catch( async (error) => {
      console.error('Error occured',error)
    });

  }

  return (
    <div><motion.div className='img-wrap'
      layout
      whileHover={{ opacity: 1 }}
    >
      <motion.img src={docu.url} alt="image gallery" onClick={() => setSelectimg(docu.url)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      {/* <BiSolidLike className='like-img'/> */}
      <Tooltip text={delText} tipClass={tipClass} >
      <IoIosCloseCircle  className='remove-img' onClick={() => setDelImg(docu.url, docu.id)}/>
      
    </Tooltip>
    </motion.div></div>
  )

}

export default Images;