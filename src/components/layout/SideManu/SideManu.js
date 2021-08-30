import React, {   } from 'react';
import ManageSalaries from '../../../assets/images/icon-dashboard (3).svg';
import ePay from '../../../assets/images/icon-dashboard (2).svg';
import Transfers from '../../../assets/images/icon-dashboard (1).svg';
import AllProducts from '../../../assets/images/icon-dashboard.svg';
import {Navigation} from 'react-minimal-side-navigation';
import {
    useHistory,
    useLocation
  } from "react-router-dom";

  
  import user from '../../../assets/images/user.jpg';
  

const SideManu = (props) => {
    const history = useHistory();
    const location = useLocation();
    return (
        
<div className="navbarcontanier">
    
                <div className="row SideBarMobileDetails"  >
                                 <div className="col Mask">
                                        <img className="Mask" src={user} style={{borderRadius:'100%'}} alt="bnk" />
                                 </div>  
                                        <div className="col infomation-user">
                                            <span className="row">Abdullah Mohamed</span>
                                            <span className="row " style={{fontSize:11}}>Last Login 23 Aug 19  |  20:30</span>
                                        </div>
                                        
                              
                        
                </div>
      
                <div className='SideBarMobile'>
                    <Navigation
                        
                            // you can use your own router's api to get pathname
                            activeItemId={location.pathname}
                            onSelect={({ itemId }) => {
                                history.push(itemId);
                            }}
                            items={[
                            {
                                title: 'All Products',
                                itemId: '/AllProducts',
                                // you can use your own custom Icon component as well
                                // icon is optional
                                elemBefore: () => <img src={AllProducts} alt="bnk"/>,
                            },
                            {
                                title: 'Transfers',
                                itemId: '/Transfers',
                                elemBefore: () => <img src={Transfers} alt="bnk"/>,
                            },
                            {
                                title: 'E-pay',
                                itemId: '/',
                                elemBefore: () => <img src={ePay} alt="bnk"/>,
                                subNav: [
                                {
                                    title: 'Manage Payers',
                                    itemId: '/ManagePayers',
                                },
                                {
                                    title: 'Production Services',
                                    itemId: '/ProductionServices',
                                },
                                ],
                            },
                            {
                                title: 'ManageSalaries',
                                itemId: '/ManageSalaries',
                                elemBefore: () => <img src={ManageSalaries} alt="bnk" />,
                            
                            }
                            ]}
                        />
                    </div>
                        
                        
     </div>
    );
  
}

export default SideManu;


       
        
// {/*    
//       <Navbar color="faded" light>
  
// <Nav navbar>
//     {
//         menuItem.map(nv=>{
//      <>
//               {
//               nv.child_routes? 
//               <NavItem>
//               <NavLink href={nv.item}> <img src={nv.icon}/>  {nv.title} </NavLink>
//               </NavItem>
//               :
//               <NavItem>
//               <NavLink href={nv.item}> <img src={nv.icon}/>  {nv.title} </NavLink>
//               </NavItem>
//               }
           
//        </>

//         })
//     }
  
//   <NavItem>
//     <NavLink onClick={toggleNavbar}><img src={list}/> GitHub{collapsed?"+":"-"}</NavLink>
//   </NavItem>
//   {/* <NavbarToggler  className="mr-2" /> */}
// {/* <Collapse isOpen={!collapsed} navbar>

//   <NavItem>
//     <NavLink href="/components/"> <img src={list}/> Components</NavLink>
//   </NavItem>
//   <NavItem>
//     <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//   </NavItem>
// </Collapse>
// </Nav>
// </Navbar>    */} 
