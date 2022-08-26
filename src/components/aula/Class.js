import React from 'react';
import '../../styles/class/class.css';
import {Link} from 'react-router-dom';
 

import Select from 'react-select'
 
function Aula () {
    const options = [
        { value: 'Matematica', label: 'Matemática' },
        { value: 'Quimica', label: 'Quimíca' },
        { value: 'Fisica', label: 'Fisíca' }
      ]
     
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:3000/api/aulas/' ;
        const options = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            materia: event.target.materia.value,
            dataaula: event.target.dataaula.value,
            hora: event.target.hora.value
          })
        };
       
        fetch(url, options)
          .then(response => {
            console.log(response.status);
            alert('Aula cadastrada com Sucesso!')
          });
      }
 
 
    return (
        <div>
            <h1>Marcar Aula</h1>
            <button><Link to="/">Ir para a Home</Link></button>
            <form onSubmit={handleSubmit}>
                 <Select name='materia'options={options} />
           
              <input name='dataaula' type='date' required/>
              <input name='hora'type="time" id="hora" name="hora" min="08:00" max="21:00" required></input>
             
              <button>Enviar</button>
            </form>
        </div>
    );
}
export default Aula