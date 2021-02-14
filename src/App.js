import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Reservas></Reservas>
    </div>
  );
}
function Reservas(props){
  const [ciudad, setCiudad] = useState("bogota")
  const [dia , setDia] = useState("1")


  function handleSubmit(event){
    alert(`se a enviado el contenido! ${ciudad} el dia ${dia}`)
    event.preventDefault();
  }

  function handleChangeCiudad(event){
    setCiudad(event.target.value)
  }
  function handleChangeDia(event){
    setDia(event.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Selecciona la ciudad:
        <select value={ciudad} onChange={handleChangeCiudad}>
          <option value="bogota">Bogota</option>
          <option value="medellin">Medellin</option>
          <option value="barranquilla">Barranquilla</option>
          <option value="cali">Cali</option>
        </select>
      </label>
      <input value={dia} type="text" placeholder="un numero" onChange={handleChangeDia}/>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
