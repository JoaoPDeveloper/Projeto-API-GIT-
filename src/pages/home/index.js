import React, { useState } from 'react' ;
import axios from 'axios';
import * as S from './styled';
import {  useNavigate } from 'react-router-dom';



    export default function App(){
      const navigate = useNavigate();
      const [usuario, setUsuario] = useState('');
      const [erro, setErro] = useState(false);
    

// function App(props) { 
    function handlePesquisa(){
        axios.get(`https://api.github.com/users/${usuario}/repos`)
          .then(response => {
          const repositories = response.data;
          const repositoriesName = []
        
          repositories.forEach((item) => repositoriesName.push(item.name))
          localStorage.setItem('RepositoriesName',JSON.stringify(repositoriesName))
          
          navigate('/repositories')
        })
        .catch(err=> {
          setErro(true);
        })
}
    
        
  return (
    <S.HomeContainer>
    <S.Content>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
      {erro ? <S.ErrorMsg>Ocorreu um erro, Tente Novamente</S.ErrorMsg>: ''}
    </S.Content>
</S.HomeContainer>
  );

}
  
  // export default App;
