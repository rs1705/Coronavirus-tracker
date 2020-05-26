import React from 'react'
import "./DataCard.css";

const DataCard=(props)=>{
  return(
    <div className="DataCard">
      <h3 className={props.type}>{props.heading}</h3>
      <p>{props.data}</p>
    </div>
  );
};
export default DataCard;