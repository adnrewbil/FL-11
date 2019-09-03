import React from 'react';

const GetButton = (props) => {
    function handleClick(e) {
      e.preventDefault();
      console.log('Click');
    }
         return (
           <button className="btn btn-primery" onClick={handleClick()}>Get({props}$)</button>
         )
  }
export default GetButton;