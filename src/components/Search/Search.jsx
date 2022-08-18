import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'

const Search = () => {
  const [informacoes, setInformacoes] = useState();
  const [cep, setCep] = useState('');
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }


  const handleReq = async () => {
    console.log(cep)
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {headers})
    const json = await resp.json()
    setInformacoes(json)
    console.log(json)
  }

  return (
    <div>
        <Label texto="Digite seu CEP:"/>
        <Input tipo="text" value={cep} onChange={e=>setCep(e.target.value)}/>
        {/* <Button onClick={handleReq}/> */}
        <button onClick={handleReq}>GO</button>
        {console.log(informacoes)}
        <h2>{informacoes ? informacoes.cep : 'carregando'}</h2>
    </div>
  )
}

export default Search