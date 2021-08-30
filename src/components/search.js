import React, { useState } from 'react';
import { List , ListInlineItem } from "reactstrap";

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const SearchBar = (props) => {
    const { data , onClick,InputName }=props;
    const [search, setSearch] = useState('');

    const [item, setitem] = useState([]);

    const filteredData = search.length === 0 ? data : 
    data.filter(item => item.toLowerCase().includes(search.toLowerCase()))

    const handleChange=(event)=> {
        // Here, we invoke the callback with the new value
       
       if(item.includes(event.target.value)){
        const index = item.indexOf(event.target.value);
        if (index > -1) {
            item.splice(index, 1);
        }
       }else{
           setitem(item => [...item, event.target.value]);
           
       }
       onClick(item);
        
    }

    
   

    
    return(
         <div>
            <List type="inline">
                {alphabet.map(item=> <ListInlineItem style={{color:item.toLowerCase()===search.toLowerCase()?'#d22630':' #54585a'}} onClick={() => setSearch(item)}>{item}</ListInlineItem>)}
           
           
            </List>
            <input 
                type="text" 
                id='search'
                placeholder="Search for countries"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

            <List type="unstyled">
                        {filteredData&&
                        filteredData.map(item=>{
                        return ( 
                        <div className="selectCountry form-check" >
                            <input className="form-check-input" type="checkbox" name={InputName}
                            onChange={(e)=>handleChange(e)}  value={item} id={item}/>
                            <label className="form-check-label" for={item}> 

                                {item}
                            </label>
                            <hr className="solid"/>
                        </div>
                                            
                                            
                        )
                            
                        })}
                    
                
                    </List>
       
    </div>)
   
    }

export default SearchBar;