import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Createnote from './component/Createnote';
import Note from './component/Note';




const App =() => {
  const [addItem, setaddItem] =useState([]);
  
  
  const Addnote= (note)=> {
    //alert("i m clicked");
    setaddItem((preValue)=>{
      return [ ...preValue,note];

    

    });

  };
  const OnDelete =(id)=>{
    setaddItem((olddata)=>
      olddata.filter((currentD, index)=>{
       return index !==id;
      }
    )
    );
  };
  return (
     <>
        <Header/>
        <Createnote passNote ={Addnote}/>
        { addItem.map((val,index)=>{
          return <Note 
          key={index} 
          id={index} 
          title={val.title} 
          content={val.content}
          deleteItem={OnDelete}
          />
         }
         )
         };
       </>
  );
};
export default App;