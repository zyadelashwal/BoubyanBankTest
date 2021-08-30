/**
 *  Header Main
 */
 import React, {  } from 'react';
 import logo from '../../../assets/images/logo.png';
 import logoMobile from '../../../assets/images/logoMobile.png';
 import logout from '../../../assets/images/ic-logout.svg';
 import notifications from '../../../assets/images/ic-notifications.svg';
 import inbox from '../../../assets/images/ic-inbox.svg';
 import user from '../../../assets/images/user.jpg';
 import list from '../../../assets/images/list.svg';
 import SideManu from '../SideManu/SideManu.js';

 
 
 
 
 
 
 class Header extends React.Component {
     constructor(props) {
 
         super(props);
         
         this.state = {
            
             activeTab: '1',
             isOpen: false,
             isSidebarOpen: false,
            LogoState:logo
           
 
            
 
         }
        
         
         this.toggleNavbar = this.toggleNavbar.bind(this);
     }
 
  
     toggleNavbar() {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen
        });
      }
 
    
    
    
 
 
       
     render() {
        
 
         return (
 
            <div>
             <header className="d-flex container-fluid" id="site-header">
                       
                       <div className="row justify-content-between hediv">
                        <div className="col-6">
                        <div className="logo">
                                               
                                                 <a href="#" onClick={this.toggleNavbar}  className="iconSideBar"><img src={list} alt="bnk"/></a>
                                                                <img className="logoDesk" src={logo} alt="logo" />
                                                                <img className="logoMobile" src={logoMobile} alt="logo" />
                                                            
                                                              </div>
                             
                        </div>
                        
                        <div className="col-6 header-right">
                               
                                            <div className="col-6 " >
                                
                                                        <div className=" infomation-user">
                                                            <span className="row">Abdullah Mohamed</span>
                                                            <span className="row ">Last Login 23 Aug 19  |  20:30</span>
                                                        </div>
                                                        <div className="Mask">
                                                        <img className="Mask" src={user} style={{borderRadius:'100%'}} alt="bnk" />
                                                        </div>
                                                    <div style={{margin:"-50px 70px 0px"}}>
                                                        <img src={inbox} className="ic-inbox" alt="bnk"/>
                                                        <img src={notifications} className="ic-inbox" alt="bnk"></img>
                                                        <img src={logout} className="ic-inbox" alt="bnk"/>
    
                                                    </div>
                                           
                                 </div>
                        </div>
                    </div>      
                                
                     
               
             </header>

                       {/* Sidebar Overlay */}
                     

                      {/*SideBar Mobile   */}

                  
                      <div
                            className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                            this.state.isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                            }`}
                            style={{display:this.state.isSidebarOpen?'flex':"none",position:'absolute',height:"100%",zIndex:1300}}
                        >
      

        <SideManu />

        
      </div>
 
           
 </div>
         )
     }
 };
 export default Header;
 
 