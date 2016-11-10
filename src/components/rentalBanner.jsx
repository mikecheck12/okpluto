"use strict";

import React from 'react';

const RentalBanner = (props) => (
  <div className="rentalBanner">
    <h1>{props.display}</h1>
  </div>
)

module.exports = RentalBanner;



 // else if (props.profileType = "userProfile") {
 //    return (
 //      <div className="banner">
 //        <h1>{"Hello " + props.display.firstname}</h1>
 //      </div>
 //    )
 //  }