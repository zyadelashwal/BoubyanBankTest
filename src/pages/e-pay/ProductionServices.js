import React, { useState ,useEffect} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card,
   Button, CardTitle, CardText, Row, Col ,
   Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import classnames from 'classnames';
import { Formik , Form,Field} from 'formik';
import FileUpload from "../../components/fileuploder/file-upload.component";
import group from '../../assets/images/group-19.svg';
import closeIcon from '../../assets/images/icons-24-px-inactive-cancel.svg';
import SearchBar from '../../components/search';
// ** Store & Actions
import { fetchCountries } from '../../redux/actions/countries.action'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
 


const ProductionServices = (props) => {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.Countries);


  const [activeTab, setActiveTab] = useState('1');
  const [SelevtedCountries, SetSelevtedCountries] = useState([]);
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });
  

  const updateUploadedFiles = (files) =>{
    setNewUserInfo({ ...newUserInfo, profileImages: files });
    
   
    
  }
  

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

 

  const handleChangeCountry=(newValue)=> {
    SetSelevtedCountries(newValue);
    
    console.log(SelevtedCountries)
 
  }


  const [modal, setModal] = useState(false);

  const toggleModel = () => setModal(!modal);

  const closeBtnmodel = <img src={closeIcon} alt="close" onClick={toggleModel}/>;

  useEffect(() => {
    // eslint-disable-next-line
     dispatch( fetchCountries())
    
  }, [])
  const Schema = Yup.object().shape({
    Name: Yup.string()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
       Price: Yup.number()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
       requestCategory: Yup.string().required('Required'),
   });

    return (
      <div className="ProductionServices">
        <span className="divTabFrom">
           <h1>Add new product / service</h1>
        </span>
      <Nav tabs style={{border:"1px solid #dee2e6" , borderRadius:5,marginBottom: 5,}}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{border:"1px solid #dee2e6" , borderRadius:5,}}>
        <TabPane tabId="1">
          <Row>
            <Col xs={'7'}>
            <h5 className="divTabFrom">Enter Item details</h5>
                  <Formik
                    initialValues={{
                      Name: '',
                    image:newUserInfo.profileImages,
                    Countries:SelevtedCountries,
                    Price :'0.000',
                    requestCategory:''
                   }}
                   validationSchema={Schema}
                    onSubmit={(values, actions) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                      }, 1000);
                    }}
                  >
                  {(formik ) => ( 
                      <Form>
                        <Row className="divTabFrom">
                         

                          
                              
                            
                        <FileUpload

                          accept=".jpg,.png,.jpeg"
                          label="Tap or drag your image"
                          // multiple
                          setFieldValue={formik.setFieldValue}
                          updateFilesCb={updateUploadedFiles}
                          />
                     
                        </Row>
                        <Row className="divTabFrom">
                         <Col xs='3'>
                        

                            <label className='Item-name-in-English'>Item name in English </label>
                            <Field className="frame" name='Name' placeholder="Enter item name"/>
                            <label style={{color:'red'}} className='Item-name-in-English'>{formik.errors.Name} </label>
                         </Col>
                        </Row>
                        <Row className="divTabFrom">
                         <Col xs='3'>
                            <label className='Item-name-in-English'>Countries where the card would be used </label>
                            <div className="frame"   onClick={toggleModel}>
                                  <span>{SelevtedCountries.length>0?SelevtedCountries.length + "  Countries selected..":"Select Country"}</span>
                               
                              </div>
                              <div style={{flexDirection:'row' , display:'flex'}}>
                                {SelevtedCountries&&SelevtedCountries.map(item=>{
                                 return (<>
                                  <div style={{height:'36px',borderRadius:4,backgroundColor:"rgba(217, 217, 217, 0.5)",margin: '5px',whiteSpace:'nowrap'}}>{item}</div>
                                  
                                 </>
                                 )

                                })}
                              </div>
                         </Col>
                        </Row>
                        <Row className="divTabFrom">
                         <Col xs='3'>
                        

                            <label className='Item-name-in-English'>Price ( Per piece ) </label>
                            <Field className="frame" name='Price'  placeholder="KWD 20.500" min="0.000" max="10000.000" step="0.001" type={'number'} />
                            <label style={{color:'red'}} className='Item-name-in-English'>{formik.errors.Price} </label>
                         </Col>
                        </Row>
                        <Row className="divTabFrom">
                         <Col xs='3'>
                         
                         <label className='Item-name-in-English'>Select request category </label>
                         <div className="form-check" role="group" aria-labelledby="my-radio-group">
                            <label>
                              <Field className="form-check-input" type="radio" name="requestCategory" value="Product" />
                              <label className="form-check-label" for="requestCategory1">
                                 Product
                              </label>
                            </label>
                            <label>
                              <Field className="form-check-input" type="radio" name="requestCategory" value="Service" />
                              <label className="form-check-label" for="requestCategory2">
                                Service
                              </label>
                            </label>
                            <label style={{color:'red'}} className='Item-name-in-English'>{formik.errors.requestCategory} </label>
                          </div>
                            
                           
                         </Col>
                        </Row>
                    
                    
                    
 
                       
                        {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
                        <div className="divTabFrom"> 
                            <Button style={{margin:10}} type="submit" disabled={formik.isSubmitting} color="danger">Submit</Button>
                            <Button style={{margin:10}} outline  type="cancel" color="danger">Cancel</Button>

                        </div>
                       
                       
                      </Form>
                    )}
                  </Formik>
            </Col>
           
           
            <Col xs={'5'} className='imgView'>
                      <img src={group} style={{width:"100%"}} alt="bank"/>
            </Col>
         
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>


      {/* Modal Countries */}

      <Modal isOpen={modal} toggle={toggleModel} >
      <ModalHeader toggle={toggleModel} close={closeBtnmodel}>Select countries</ModalHeader>
      <ModalBody>
        <SearchBar data={countries} onClick={handleChangeCountry} />
        {/* onClick={handleChange} */}


      </ModalBody>
      <ModalFooter style={{justifyContent:'flex-start'}}>
      <Button onClick={toggleModel} type="submit" color="danger">Submit</Button>
        
      </ModalFooter>
    </Modal>
    </div>
    );
  
}

export default ProductionServices;
