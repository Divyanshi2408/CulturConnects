import React, { useState } from "react";

import "react-accessible-accordion/dist/fancy-example.css";


// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <><div style={{
      position: 'relative',
      width: '100%',

      height: '500px', /* You can adjust the height as needed */
    }}>
      <iframe
        src="https://divyanshi2408.github.io/page12/"

        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }} />
    </div><div style={{
      position: 'relative',
      width: '100%',

      height: '900px', /* You can adjust the height as needed */
    }}>
        <iframe
          src="https://divyanshi2408.github.io/page1/"

          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }} />
      </div>
      <div style={{
      position: 'relative',
      width: '100%',
      height: '800px', /* You can adjust the height as needed */
      
    }}>
      <iframe
        src="https://divyanshi2408.github.io/page3/"

        style={{
          position:"absolute",
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }} />
   </div>
   <div style={{
      position: 'relative',
      width: '100%',
      
      height: '1509px', /* You can adjust the height as needed */
      
    }}>
      <iframe
        src="https://divyanshi2408.github.io/page14/"

        style={{
          position:"absolute",
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }} />
   </div>
</>

   
  );
};

export default Value;
