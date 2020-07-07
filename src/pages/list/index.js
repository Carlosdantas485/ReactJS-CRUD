import React,{useState,useEffect} from 'react';

import { Container } from './styles';
import { useHistory } from 'react-router-dom';

import api from'../../services/api';
import { toast } from 'react-toastify';


function Login() {

  const History = useHistory();

  const [users, setUsers] = useState([]);
    
  async function handleDelete(idUsers){
    
    try{
      const token = localStorage.getItem('token');
      const response = await api.delete(`/adm_panel/manager/${idUsers}`,{
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      handleList();
      toast.success('Usuário deletado');
    }
    catch(err){
      toast.error('Usuário não pode ser deletado');
    }
  }

  async function handleList(){
    
    const token = localStorage.getItem('token');

    const response = await api.get('/adm_panel/manager/', {
      headers: { Authorization: `JWT ${token}`,
      },
    });

    console.log(response.data.managers);
    setUsers(response.data.managers);
  }

  useEffect(() => {
    handleList();
  },[]);

  function btnCriar(){
    History.push('/create');

  }
  return (
    <>
    <Container>
      {users.map((user) => (
        <div className="user">
          <div className="info-users">
            <h1>{user.nome_user}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.community}</h1>
            <h1>{user.acess_type}</h1>
          </div>
          <div className="options">
            <button onClick={btnCriar}>Criar</button>
            <button onClick={() => handleDelete(user.id_manager)}>Excluir</button>
            <button>Editar</button>
          </div>
        </div>
      ))}
    </Container>
    </>
  );
}

export default Login;
