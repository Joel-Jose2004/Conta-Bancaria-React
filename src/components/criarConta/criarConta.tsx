import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

function CriarConta(){
    const [conta,setConta]=useState({
        nome:"",
        saldo:""
    })

    const navigate=useNavigate();

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
          const {name,value}=event.target;
          setConta({...conta,[name]:value});
    }

    const Handlesubmit=(e:React.FormEvent)=>{
      e.preventDefault();

      var Conta=[];
      if(localStorage.hasOwnProperty("conta")){
        Conta=JSON.parse(localStorage.getItem("conta")||"[]");
      }
      
      var Saldo=parseInt(conta.saldo);
      if (Saldo < 20000) {
        alert("Não pode abrir conta com saldo inicial menor que 20.000.");
        return;
    }

 var sal=parseInt(conta.saldo);
      var id=Conta.length+1;
      const numeroConta = `${Date.now()}`;
    const Numeroconta = parseFloat(numeroConta.toString());

    Conta.push({id:id,nome:conta.nome,saldo:sal,numeroConta:Numeroconta})

    localStorage.setItem("conta",JSON.stringify(Conta))

    navigate("/view");
    }




    return(
        <div className="form1">
        <h3>Criar Conta</h3>
   <form className="form2" onSubmit={Handlesubmit}>
      
     <input type="text" name="nome" id="idname" placeholder='Nome' onChange={handleChange} required/><br/><p></p>
     <input type="number" name="saldo" id="idsaldo" placeholder='Saldo' onChange={handleChange} required/><br/><p></p>
     <button id="criar" type='submit'>Criar Conta</button><p></p>
     
   </form>
</div>

    )
}


export default CriarConta;