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
      <header>
        <input type="text" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <button type="button" onClick={handlePesquisa}>Enviar</button>
      </header>
      <data>
        <ul>
          {repositorios.map(repo => <li>{repo.id} - {repo.name}</li>)}
        </ul>
      </data>
    </div>
  );
}

export default App;
