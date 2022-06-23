 import React from 'react'
 
 const year = new Date().getFullYear();
  const Footer =() => {
    return(<>
     <footer>
         <p> copyright {year}</p>
     </footer>
     </>
    );

  
  };
  export default Footer;