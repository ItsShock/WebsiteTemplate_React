import React from 'react';
import './Offer.css';


function Offer({label, isNew}) {
  return(
    <div className="box">
        {label}
        {isNew ? <div style={{margin: '0px'}}><div className="small_ellipse" div/> <p className="new" style={{fontSize: "17px"}}>(nowość)</p></div>: <></>}
    </div>
  );
}


export default Offer;


