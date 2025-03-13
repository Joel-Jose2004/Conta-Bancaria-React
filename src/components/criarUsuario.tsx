import React, { useState } from 'react';
import '../css/criarUsuario.css';
import { Link, useNavigate } from 'react-router-dom';

function CriarUsuario(){
   const [Usuario,setUsuario]=useState({
    nome:"",
    email:"",
    passe:""
   })

   const navigate=useNavigate();

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
         const {name,value}=event.target;
      setUsuario({...Usuario,[name]:value});
    } 

    const HandleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        var vetor=[];

      if(localStorage.hasOwnProperty("usuario")){
          vetor=JSON.parse(localStorage.getItem("usuario")||"[]");
      }
      var id = vetor.length + 1;
    vetor.push({ id: id, nome:Usuario.nome, email:Usuario.email, password:Usuario.passe });
    localStorage.setItem("usuario", JSON.stringify(vetor));
    
    navigate("/components");

    }

    return(
        <div className="form1">
             <h3>Criar-Conta</h3>
        <form className="form2" onSubmit={HandleSubmit}>
           
          <input type="text" name="nome" id="idname" placeholder='Nome' onChange={handleChange} required/><br/><p></p>
          <input type="email" name="email" id="idemail" placeholder='E-mail' onChange={handleChange} required/><br/><p></p>
          <input type="password" name="passe" id="idpass" placeholder='Palavra-Passe' onChange={handleChange} required/><br/><p></p>
          <button id="criar" type='submit'>Criar</button><p></p>
          <Link to="/components">Já tenho conta</Link>
        </form>
    </div>
 
    )
}

export default CriarUsuario;