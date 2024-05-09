import React from 'react'
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";




const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <div style={{
        position: 'relative',
        width: '100%',
        marginTop: "20px",
        height: '300px', /* You can adjust the height as needed */
        
      }}>
        <iframe
          src="https://divyanshi2408.github.io/page10/"
         
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            
          }}
        />
      
      </div>
    <Residencies/>
    <div style={{
        position: 'relative',
        width: '100%',
        marginTop: "20px",
        height: '900px', /* You can adjust the height as needed */
        
      }}>
        <iframe
          src="https://divyanshi2408.github.io/page11/"
         
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            
          }}
        />
      </div>

    <div style={{
        position: 'relative',
        width: '100%',
        height: '730px', /* You can adjust the height as needed */
        
      }}>
        <iframe
          src="https://divyanshi2408.github.io/page9/"
         
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            
          }}
        />
      
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '600px', /* You can adjust the height as needed */
        
      }}>
        <iframe
          src="https://divyanshi2408.github.io/page8/"
         
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            
          }}
        />
      
      </div>
    <div style={{
        position: 'relative',
        width: '100%',
        height: '830px', /* You can adjust the height as needed */
        
      }}>
        <iframe
          src="https://divyanshi2408.github.io/page1/"
         
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            
          }}
        />
      
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '800px', /* You can adjust the height as needed */
        
      }}>
        <iframe
          src="https://divyanshi2408.github.io/page2/"
         
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            
          }}
        />
      </div>
      
      <div style={{
        position: 'relative',
        width: '100%',
        height: '700px', /* You can adjust the height as needed */
        
      }}>
        <iframe
          src="https://divyanshi2408.github.io/page7/"
         
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            
          }}
        />
      </div>
  </div>
  )
}

export default Website