import React, {useContext} from 'react';
import {AuthContext} from "../../contexts/auth";

export default function Dashboard() {
  const {logoff} = useContext(AuthContext);
 return (
   <div>
    <h1>Tela de Dashboard</h1>
    <button onClick={() => logoff()}> Sair </button>
   </div>
 );
}