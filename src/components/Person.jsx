import React from 'react';
import './Person.css';


function Person({name, department, description, isEven}) {
  return(
    <div className="persons">
        {   isEven  
        ?   <div className='person-even'>
                <div className="ellipse1"></div>
                <div className="person1">
                    <p id="p_1" >{name} {department}</p>
                    <p id="description1">{description}</p>
                </div>
            </div> 
        :   <div className='person-odd'>
                <div className="ellipse2"></div>
                <div className="person2">
                <p style={{fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', fontSize: '28px', marginBottom: '38px'}}>{name} {department}</p>
                    <p id="description2">{description}</p>
                </div>
            </div>}
            
    </div>
      
    );
}


export default Person;