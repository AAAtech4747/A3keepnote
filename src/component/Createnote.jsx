import React from 'react';
import { useState } from 'react';
import {GrAddCircle} from 'react-icons/gr'


const Createnote = (props) => {
  const[note , setNote]=useState({
        title:"",
        content:""
  });

  const InputEvent= (event) => {

    // const value =event.target.value;
    // const name =event.target.name;
      
    const {name,value}= event.target;  // ARRAY DESTUCTURING
     
      
        setNote((preValue) =>{
         return {
         ...preValue,
         [name]: value,
         };
       });
      };

      const submitButton =(event)=>{
          props.passNote(note);
          setNote({
            title:"",
            content:""
           });
          event.preventDefault();

      };

 return(
        <>
         <div>
        <form >
         <input type="text"
         name='title'
        value={note.title}
        placeholder='Title'
        onChange={InputEvent}>
        </input>
        
         <p>
         <textarea rows="" 
         column="" 
         name='content'
         value={note.content}
        placeholder='Write a note....'
        onChange={InputEvent}>
        </textarea>
         </p>  
          {/* <Button>
            <AddIcon className="plus_sign"/>
         </Button>  */}
         <button onClick={submitButton}><GrAddCircle size={35}/></button>
        </form> 
        
        </div>    
        </>
    );
 };
export default Createnote;