import { Link, useNavigate } from 'react-router-dom';
import '../css/loginUsuario.css';
import React, { useState } from 'react';

interface user{
    nome:string,
    password:string
}

function LoginUsuario(){
const [verify, setVerify]=useState({
    nome:"",
    password:""
})

const navigate=useNavigate();

const ver=(event:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=event.target;

      setVerify({...verify,[name]:value});
}

const Verify=(e:React.FormEvent)=>{
e.preventDefault();
var vetor=[];

    vetor=JSON.parse(localStorage.getItem("usuario")||"[]");

var pega=vetor.find((index:user)=>index.nome===verify.nome && index.password===verify.password);

if(pega){
    alert("encontrado");
    navigate("/criarConta");
}else{
    alert("não encontrado");
}
}

    return(
        <div className="form1">
            <h3>Login</h3>
        <form className="form2" onSubmit={Verify}>
            
          <input type="text" name="nome" id="idname" placeholder="Nome" required onChange={ver}/><br/><p></p>
          <input type="password" name="password" id="idpass" placeholder="Palavra-Passe" required onChange={ver}/><br/><p></p>
          <button id="login" type='submit'>Login</button><p></p>
    
          <Link to="/">Voltar</Link>
        </form>
    </div>
    )
}


export default LoginUsuario;