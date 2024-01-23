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
  return (
    <>
    <div className="App">
      <Nav/>
      <InstallPWA/>
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectimg={setSelectimg} />
      {selectimg && <Modal selectimg={selectimg} setSelectimg={setSelectimg}/>}
    </div>
      <Footer/>
    </>
  );
}

export default App;
