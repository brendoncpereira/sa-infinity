import React, {useState} from 'react';
import '../../styles/register/register.css';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { logDOM } from '@testing-library/react';


const schema = yup.object({
    nome: yup.string().required('O nome é obrigatório!'),
    sobrenome: yup.string().required('O sobrenome é obrigatório!'),
    email: yup.string().required('O email é obrigatório!').email('O email informado é invalido!'),
    senha: yup.string().required('A senha é obrigatória!').min(8, 'A senha é menor que 8 caracteres!'),
    confirmsenha: yup.string().required('Por favor, confirme sua senha!').oneOf([yup.ref('senha')], 'As senhas não coincidem!')
    
  }).required();


const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
        
       
      });

      const [nome, setNome] = useState()
      const [sobrenome, setSobrenome] = useState()
      const [email, setEmail] = useState()
      const [senha, setSenha] = useState()
      
      

    function onSubmit(userData, event) {
      // let arrayPessoas = JSON.parse(localStorage.getItem('cadastros'))
        console.log(userData);
        event.preventDefault();
        const url = 'http://localhost:3000/api/estudantes';
        const options = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            nome: event.target.nome.value,
            sobrenome: event.target.sobrenome.value,
            email: event.target.email.value,
            senha: event.target.senha.value
          })
        };
        
        fetch(url, options)
          .then(response => {
            console.log(response.status);
          });
          window.location.href = 'http://localhost:3001/Login'
    }
    

    

    
    return (
        <>
            <div className='main-wrapper-aut'>
                
                <div className='left-container-aut'>
                    <div className='illustration-aut'>
                        
                    </div>

                    {/* <div className='title-aut'>
                        <h1>Reiventando a forma de aprender.</h1>
                        
                    </div> */}

                    <div className='subtitle-aut'>
                    <h3>Já tem uma conta? 
                        
                        <Link to={'/Login'}>
                        <span>  Faça Login :) </span>
                        </Link>
                    </h3>
                    </div>
                </div>

                <div className='right-container-aut'>

                    <div className='wrapper-form-container-aut'>

                        <div className='form-container-title-aut'>

                        <h1>infinity</h1>
                        <p> Junte-se a nós, crie sua conta.</p>

                        </div>

                    <form className='form-group-aut' onSubmit={handleSubmit(onSubmit)}>
                        <div className='input-field-aut'>
                        
                        <div className='input-box-aut'>
                        <input type='text' placeholder='Nome:' className='input-aut' {...register("nome", { required: true })} style={{borderBottom: errors.nome?.message ? '1px solid red' : '' }}  
                        onChange={(e) => setNome(e.target.value)}
                        />
                        <span className='span'>{errors.nome?.message}</span>
                        </div>

                        <div className='input-box-aut'>
                        <input type='text' placeholder='Sobrenome:' className='input-aut' {...register("sobrenome", { required: true })} style={{ borderBottom: errors.sobrenome?.message ? '1px solid red' : '' }}
                          onChange={(e) => setSobrenome(e.target.value)}
                        />
                        <span className='span'>{errors.sobrenome?.message}</span>
                        </div>
                        
                        <div className='input-box-aut'>
                        <input type='text' placeholder='Email:' className='input-aut' {...register("email", { required: true })} style={{ color: errors.email?.message ? 'red' : '', borderBottom: errors.email?.message ? '1px solid red' : '' }}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className='span'>{errors.email?.message}</span>
                        </div>
                        
                        <div className='input-box-aut'>
                        <input type='password' placeholder='Senha:' className='input-aut' {...register("senha", { required: true })} style={{ color: errors.senha?.message ? 'red' : '', borderBottom: errors.senha?.message ? '1px solid red' : '' }}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                        <span className='span'>{errors.senha?.message}</span>
                        </div>
                       
                        <div className='input-box-aut'>
                        <input type='password' placeholder='Confirme sua senha:' className='input-aut' {...register("confirmsenha", { required: true })} style={{ color: errors.confirmsenha?.message ? 'red' : '', borderBottom: errors.confirmsenha?.message ? '1px solid red' : '' }}/>
                        <span className='span'>{errors.confirmsenha?.message}</span>
                        </div>
                        

                        </div>
                        
                        <div className='btn-wrapper-aut'>
                        <button className='submit-form-btn-aut' type='submit' >Cadastrar</button>
                        </div>

                </form>

                <div className='subtitle-bp-900px-aut'>
                    <h3>Já tem uma conta?  
                        <Link to={'/Login'}>
                        <span>  Faça Login :) </span>
                        </Link> </h3>
                    </div>

                    </div>

                    
                </div>

                
            </div>
        </>
    )
}

export default Register;