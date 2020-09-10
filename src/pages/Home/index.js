import React, { useState } from 'react';
import { FiPlusCircle, FiCheck, FiMinus, FiTrash2 } from "react-icons/fi";


import './styles.css';

const Home = () => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [items, setItems] = useState([]);
        
    

    function adiconaLista(){
        setItems([...items,
            {
                'key': items.length + 1,
                'quantidade': amount,
                'nameProd': name,
                'conditional': false
            }
        ])

    }

    function excluirLista(){
        setItems([])
    }

    function excluirItem(id, e){
        const temp = [...items];

        temp.splice(id, 1);

        setItems(temp);

        
                
    }

    function confirmarCompra(id, e){
        const temp = [...items];
        if(temp[id].conditional === true){
            temp[id] = {
                'key': temp.key,
                'quantidade': temp.quantidade,
                'nameProd': temp.nameProd,
                'conditional': false
            };
        }else {
            temp[id] = {
                'key': temp.key,
                'quantidade': temp.quantidade,
                'nameProd': temp.nameProd,
                'conditional': true
            };
        }
        

        setItems(temp);

    }

    function alterarQuant(id, e){
        const temp = [...items];
        
        temp[id] = {
            'key': temp.key,
            'quantidade': e.target.value,
            'nameProd': temp.nameProd,
            'conditional': false
        };
        
        

        setItems(temp);
        
    }

    return (
        <div id="page-home">
            <div className="box"> 
                <h1>Produtos Para Compra</h1>
                <div className="cadastro">
                    <div className="field">
                        <label htmlFor="name">Produto</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={event => setName(event.target.value)}
                        />
                    </div>
                    <div className="amount">
                        <label htmlFor="name">Quantidade</label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            onChange={event => setAmount(event.target.value)}
                        />
                    </div>
                    <div className="buttonIcon">
                        <FiPlusCircle style={{ fontSize: "318%", color: "#00FF7F", cursor: "pointer"}} onClick={adiconaLista} />
                    </div>
                </div>

                <div className="Title-List">
                    <h2>Lista</h2>
                    <div className="buttonIconThash">
                        <FiTrash2 style={{ fontSize: "318%", color: "#FF6347", cursor: "pointer"}} onClick={excluirLista} />
                    </div>
                </div>

                {items.map((item, id)=>(
                    <div className="lista" key={id}>
                        <hr className={item.conditional ? 'traco' : 'noneDisp'} key={id}/>
                        <div className="field">
                            <label htmlFor="name">Produto</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={item.nameProd}
                                readOnly
                            />
                        </div>
                        <div className="amount">
                            <label htmlFor="name">Quantidade</label>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                defaultValue={item.quantidade}
                                onChange={event => alterarQuant(item.id, event)}
                                
                            />
                        </div>
                        <div className="buttonIcon">
                            <FiCheck style={{ fontSize: "318%", color: "#00FF7F" }} onClick={(e) => confirmarCompra(id, e)}/>
                        </div>
                        <div className="buttonIcon">
                            <FiMinus style={{ fontSize: "318%", color: "#FF6347" }} onClick={(e) => excluirItem(id, e)}/>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default Home;



