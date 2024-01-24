import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import InstallPWA from './comps/InstallPWA';
import Nav from './comps/nav/Nav';
import Footer from './comps/footer/Footer';
 
function App() {
  const [selectimg, setSelectimg] =useState(null);
  const [filelen,setFilelen] = useState(4);
  return (
    <>
    <div className="App">
      <Nav/>
      <InstallPWA/>
      <Title/>
      {filelen>=4?<h2 style={{textAlign:'center'}}>Max 4 Files Allowed</h2>:<UploadForm />}
      <ImageGrid setSelectimg={setSelectimg} setFilelen={setFilelen} />
      {selectimg && <Modal selectimg={selectimg} setSelectimg={setSelectimg}/>}
    </div>
      <Footer/>
    </>
  );
}

export default App;
