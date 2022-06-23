import React from 'react';
import "../component/Master.css";

import {RiDeleteBinLine} from 'react-icons/ri'


const Note =(props) => {

    const deleteNote =() => {
        props.deleteItem(props.id);
    };

    return(
    <>      
    <div className='note'>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button  className='deleteB' onClick={deleteNote}> <RiDeleteBinLine size={20}/> </button>    
    </div>
    </>
    );
};
export default Note;