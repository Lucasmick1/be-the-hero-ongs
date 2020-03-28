import React , {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';


import './style.css';

export default function Profile(){
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIcidents] = useState([]);

    useEffect(()=>{
        api.get('profiles',{
            headers:{
                authorization : ongId,
            }
        }).then(response => {
            setIcidents(response.data);
            
        });

        
    }, [ongId])
    
    async function handleDeleteIncidents(id){

        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ongId,
                }
            });

            setIcidents(incidents.filter(incidents => incidents.id !== id));
        }catch(err){
            alert('Erro ao deletar caso, tente novamente!');
        }
    }

    function handleLogout(){

        localStorage.clear();

        history.push('/');
    }
    return (
        
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
    <span>Bem Vindo, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/> 
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {
                    incidents.map(incidents => (
                    <li key={incidents.id}>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incidents.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'})
                            .format(incidents.value)}</p>

                    <button onClick={() => handleDeleteIncidents(incidents.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                    ))
                }
            </ul>
            
        </div>
        //developed by : Lucasmick
    );

}