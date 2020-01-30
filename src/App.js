import React, {useState, useEffect,Fragment} from 'react';

import './App.css';
import Form from './components/Form';
import Cita from './components/Cita';



function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  const [citas, setCitas] = useState(citasIniciales || []);

  useEffect(() => {
     
     localStorage.setItem('citas', JSON.stringify(citas));
    
  },[citas])

  const getCita = (cita) => {
    setCitas(
      [...citas,cita]
    )
   
  }

  const deleteCita = (id) => {
      let newCita = citas.filter((element) => (
        element.id !== id
      )) 
      setCitas(newCita);
  }
  
  const titulo = citas.length >0 ? 'Citas existentes': 'Intoducir nueva cita' ;
  return (

    
   
    <Fragment>
    <h1>Administrador de Pacientes </h1>
    <div className='container'>
      <div className='row'>
          <div className='one-half column '>
              <Form getCita={getCita}/>
          </div>
         
          <div className='one-half column '>
          <h2 style={{marginBottom: '48px'}}>{titulo}</h2>
            { citas.map((cita,index) => (
              <Cita
              deleteCita={deleteCita}
              key={cita.id}
               cita={cita}
               index={index}/>
            ))}
          </div>
      </div>
    </div>
    </Fragment>
    
  );
}

export default App;
