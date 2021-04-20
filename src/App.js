import React, { useState } from 'react';
import Navbar from './navbar';
import Top from './top';
import Image from './image';
import Dev from './dev';
import Lorem from './lorem';
import Sql from './sql';
import Footer from './footer';
import Helps from './helps';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(false);

    const showButton = () =>{
       if(window.innerWidth <= 960) {
           setButton(false);
       }
       else{
           setButton(true);
       }
    } ;

    window.addEventListener('resize', showButton);

  return (
    <>
    < Navbar />
    < Top />
    < Image />
    < Dev />
    < Lorem />
    < Sql />
    < Helps />
    < Footer />
    </>
  );
}

export default App;
