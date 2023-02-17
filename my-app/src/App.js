import React from "react";
import ReactDOM from "react-dom";
// import Heading from "./Heading";
// import List from "./List";
import contacts from "./contacts";
import Card from "./Card";

function InsertCard(contact){
  return (
    <Card key={contact.id} name={contact.name} image={contact.image} text={contact.text}/>
  )
}

function App(){
  return (
    <div className="App">
    {contacts.map(InsertCard)}
    </div>
  )
}

export default App;