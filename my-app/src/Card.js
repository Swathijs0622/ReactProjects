import React from "react";

export default function Card(props){
    return (
      <div>
        <h1>{props.name}</h1>
        <img alt={props.name} src={props.image} />
        <p>{props.text}</p>
      </div>
    )
  }