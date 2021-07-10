/** Hook useState */
import React, { useState } from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import './App.css';

/** Component */
function App(props) {
  /** Desestruturation */
  const [usuario, setUsuario] = useState('marciosouzaduarte');
  const [repositorios, setRepositorios] = useState([]);
  function handlePesquisa() {
    /** String interpolation with parameter */
    let link = `https://api.github.com/users/${usuario}/repos`;
    axios.get(link).then(response => setRepositorios(response.data));
  }
  return (
    /** fragment <></> */
    <div className="conteiner">
      <p>Pesquisar repositórios no GitHub</p>
      <header>
        <input type="text" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <button type="button" onClick={handlePesquisa}>Pesquisar</button>
      </header>
      <data>
        <ul>
          {repositorios.map(repo => <li><a target="_blank" href={`https://github.com/${usuario}/${repo.name}`}>{repo.name}</a></li>)}
        </ul>
      </data>
      <footer>
        {<img src={typeof (repositorios[0]) != "undefined" ? repositorios[0].owner.avatar_url : ''} />}
      </footer>
    </div>
  );
}

export default App;
