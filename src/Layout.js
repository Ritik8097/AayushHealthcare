import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Banner2 from './Banner2'
import Specialities from './Specilalities'
import Blog from './Blog'
import Service from './Service'
import Testimonal from './Testimonal'
import HNewFooter from './HNewfooter'




function Layout() {
  return (
     <>
     
     <Header/>
    <Banner/>
    <Banner2 />
    <Specialities/>
    <Service/>
     <Blog />
    <Testimonal />
    
    <HNewFooter />
    </>
  );
}

export default Layout;
