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
    if (usuario != '') {
      let link = `https://api.github.com/users/${usuario}/repos`;
      axios.get(link).then(response => setRepositorios(response.data));
    } else {
      setUsuario('');
      setRepositorios([]);
    }
  }
  return (
    /** fragment <></> */
    <div className="conteiner">
      <p>Pesquisar repositórios no GitHub</p>
      <header>
        <input type="text" className="usuarioInput" placeholder="Repositório" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <button type="button" onClick={handlePesquisa}>Pesquisar</button>
      </header>
      <image>
        {typeof (repositorios[0]) != "undefined" ? <img src={repositorios[0].owner.avatar_url} /> : ''}
      </image>
      <data>
        <ul>
          {repositorios.map(repo => <li><a target="_blank" href={`https://github.com/${usuario}/${repo.name}`}>{repo.name}</a></li>)}
        </ul>
      </data>
    </div>
  );
}

export default App;
