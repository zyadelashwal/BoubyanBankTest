import React, { Fragment,useEffect } from 'react'
import { Row  } from 'reactstrap';
import SideManu from './components/layout/SideManu/SideManu.js';
import Header from './components/layout/header/Header';


const App = ({children}) => {

  useEffect(() => {
    window.addEventListener('mousemove', handleScroll);
  
    // returned function will be called on component unmount 
    return () => {
      window.removeEventListener("mousemove",handleScroll)
    }
  }, [])
 
 const handleScroll=()=> {
    
            
                if(window.innerWidth <= 900){
                  document.getElementById("details").setAttribute("className","col-12");
                }else{
                  document.getElementById("details").setAttribute("className","col-9");
                }
        
    
  }
  return (
    <Fragment> 
    
   
     
     
       <Header />
     
      <main>
       <Row className="maindiv">
         <div className="col-3 navMobile"><SideManu /></div>
         <div id="details" className="col-9"> {children}</div>
       </Row>
      
      </main>
     
      
   
    </Fragment>  
  );
}

export default App;
