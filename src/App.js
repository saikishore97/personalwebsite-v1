import React,{useState} from 'react';
import './App.css';
import Header from './Header.component';
import Sidebar from './Sidebar.component';
import NameInfoBanner from './NameInfoBanner.component';
import AboutMeSection from './AboutMeSection.component';
import ProjectsSection from './ProjectsSection.component';
import EmailSidebar from './EmailSidebar.component';
import Footer from './Footer.component';


function App(){

  return (

    <div className="app">
          <Header/>
      <div className="app__body">
          <Sidebar/>
          <NameInfoBanner/>
          <AboutMeSection />
          <ProjectsSection/>
          <EmailSidebar/>
          <Footer/>
      </div>  
    </div>
  );
}

export default App;
