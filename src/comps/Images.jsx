import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getStorage, ref, deleteObject } from "firebase/storage";
import { app } from '../firebase/config'
import { getFirestore, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import Tooltip from './tooltip/Tooltip';
import { BiSolidLike } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";


const Images = ({ setSelectimg, docu }) => {
  const [delText, setDelText] = useState('Delete');
  const [tipClass, setTipClas] = useState('tooltiptext')
  const [likedStatus, setLikedStatus] = useState(docu.like)
  const storage = getStorage();
  const db = getFirestore(app)

  async function changeLike(id, like) {
    setLikedStatus(!like)
    const updateLike = doc(db, "images", id);
    await updateDoc(updateLike, {
      like: !like
    });
  }

  const setDelImg = (delimg, delId) => {
    const desertRef = ref(storage, delimg);
    setTipClas('tooltipactive')
    setDelText('Deleting...')
    deleteObject(desertRef).then(async () => {
      console.log('deleted', docu.id)
      await deleteDoc(doc(db, "images", delId));
    }).then(() => { console.log('updated store') }).catch(async (error) => {
      await deleteDoc(doc(db, "images", delId));
      console.error('Error occured', error)
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
      <BiSolidLike className={likedStatus ? 'like-img like-active' : 'like-img'} onClick={() => changeLike(docu.id, docu.like)} />
      <Tooltip text={delText} tipClass={tipClass} >
        <IoIosCloseCircle className='remove-img' onClick={() => setDelImg(docu.url, docu.id)} />

      </Tooltip>
    </motion.div></div>
  )

}

export default Images;