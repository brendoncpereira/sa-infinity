import React from 'react';
import '../../styles/user-config/user-config.css';
import {Link} from 'react-router-dom';


const loginDocente = (props) => {

    async function onSubmit(userData, event) {
        console.log(userData);
        event.preventDefault();
        const url = 'http://localhost:3000/api/docenteslogin';
        const options = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            email: event.target.email.value,
            senha: event.target.senha.value
          })
        };
        await fetch(url, options)
          .then(response => {
            console.log(response.json());
          });
          alert('alou')
        

    }

return (
    <div>
        <h1>Atualizar</h1>
        <button><Link to="/">Ir para a Home</Link></button>
        <form onSubmit={onSubmit}            >
        <input placeholder='email' name='email' type='email' required/>
        <input placeholder='senha' name='senha' type='text' required/>
        {/* <input placeholder='id' name='id' type='number' required/> */}
          <button>Enviar</button>
        </form>
    </div>
);
}
export default loginDocente
