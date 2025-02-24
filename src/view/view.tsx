import { useState } from 'react';
import '../css/view.css';

interface Conta {
    nome: string;
    saldo: number;
    numeroConta: number;
}

function View() {
    const contas:Conta[] = JSON.parse(localStorage.getItem("conta") || "[]");
    const [modalAberto, setModalAberto] = useState(false);
    const [contaSelecionada, setContaSelecionada] = useState<Conta | null>(null);
    const [deposita,setDeposita]=useState({
        saldoDeposito:""
    })




    const handle=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;

     setDeposita({...deposita,[name]:value})
    }

    const depositar=(e:React.FormEvent)=>{
        e.preventDefault();
      alert(contaSelecionada?.numeroConta);

      var contaUsuario=JSON.parse(localStorage.getItem("conta")||"[]");
      var modificar=contaUsuario.find((index:Conta)=>index.numeroConta===contaSelecionada?.numeroConta)
       
      if(modificar){         
        var valor=parseInt(deposita.saldoDeposito);
        modificar.saldo=modificar.saldo+valor;
       alert("Adicionou"+modificar.saldo)
       localStorage.setItem("conta", JSON.stringify(contaUsuario));

    }
}








    const abrirModal = (conta: Conta) => {
        setContaSelecionada(conta);
        setModalAberto(true);
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setModalAberto(false);
        setContaSelecionada(null);
    };
    
const Levantar=(conta:number)=>{
 var saque=10000;
var contaUsuario=JSON.parse(localStorage.getItem("conta")||"[]");
var modificar=contaUsuario.find((index:Conta)=>index.numeroConta===conta)

if(modificar){
modificar.saldo-=saque;
alert("restante"+modificar.saldo)
localStorage.setItem("conta", JSON.stringify(contaUsuario));
}else{
    alert("error");
}


}   

    return (
        <div>
            <div className="conteudo">
                {contas.map((conta, index) => (
                    <div key={index} className="dad">
                        <div className="data"> 
                            <div className="child"><strong>Nome: </strong>{conta.nome}</div><br />
                            <div className="child"><strong>Saldo: </strong>{conta.saldo} KZ</div><br />
                            <div className="child"><strong>Número da Conta: </strong>{conta.numeroConta}</div><br />
                        </div> 
                        <div className='btn'>
                            <div className="child"><button onClick={()=>Levantar(conta.numeroConta)}>Levantamento</button></div><br />
                            <div className="child"><button onClick={()=>abrirModal(conta)}>Depositar</button></div>
                        </div>
                    </div>
                ))}
            </div>



              {/* Modal */}
              {modalAberto && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={fecharModal}>&times;</span>
                        <h2>Detalhes da Conta</h2>
                        {contaSelecionada && (
                            <div>
                                <input type="text" name='nome' value={contaSelecionada.nome}  
                                onChange={(handle) => setContaSelecionada({ ...contaSelecionada, nome: handle.target.value } as Conta)}/>
                                <input type='hidden' name='conta' value={contaSelecionada.numeroConta}/>
                                <input type="number" name='saldoDeposito' onChange={handle}/>
                                <button onClick={depositar}>Finalizar</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default View;
