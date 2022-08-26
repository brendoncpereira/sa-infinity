import React, { useState } from "react";

const Teste = () => {
    const nome = JSON.parse(localStorage.getItem('User_Logado'))[0].nome
    const sobrenome = JSON.parse(localStorage.getItem('User_Logado'))[0].sobrenome
    const email = JSON.parse(localStorage.getItem('User_Logado'))[0].email

    const logout = () => {
        localStorage.getItem('User_Logado')

        localStorage.clear()
        window.location.href = 'http://localhost:3001/Login'
    }

    const verLocalStorage = () => {
        
        document.getElementById('local').value = JSON.parse(localStorage.getItem('User_Logado'))[0].nome

    }
    
    return(
        <div className="container">

        <input type='teste' id='local'/>
        
        <button onClick={() => verLocalStorage('User_Logado')}>Ver localStorage</button>
        
            <h3>{nome}</h3>
            <h4>{sobrenome}</h4>
            <h5>{email}</h5>

            <button onClick={logout}>Deslogar</button>
            
        </div>
    )
}       

export default Teste