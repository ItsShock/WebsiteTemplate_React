import React from 'react';



function Offer({label, isNew, isNewCircle}) {
  return(
    <div className="box">
        {isNew}
        {label}
        {isNewCircle}
    </div>
  );
}


export default Offer;
