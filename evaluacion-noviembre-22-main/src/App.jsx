import React from 'react'
import Posteos from './components/Posteos'
import Estatus from './components/Estatus';
import data from './components/data.json'
import { useState } from 'react';
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const [value, setValue] = useState(0) 

  return (
    <div className="App">
      <Estatus like={value} />
      <Posteos setValue={setValue}ArrayPosts={data}/>
    </div>
  );
}

export default App;
