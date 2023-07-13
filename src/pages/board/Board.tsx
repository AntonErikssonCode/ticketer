import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

function Board({}) {
  const { boardId } = useParams();
  
  useEffect(()=>{
    console.log(boardId)

  },[])
  return (
    <div> <h1>Board </h1><h3>{boardId}</h3></div>
  );
}

export default Board;