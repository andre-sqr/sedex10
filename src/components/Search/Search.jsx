import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import CardHistorico from '../CardHistorico/CardHistorico'
import Input from '../Input/Input'
import Label from '../Label/Label'

const Search = () => {
  const [informacoes, setInformacoes] = useState();
  const [cep, setCep] = useState('');
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  const insertCep = ()=> {
    let cep = informacoes.cep
    let logradouro = informacoes.logradouro
    let bairro = informacoes.bairro
    let cidade = informacoes.localidade
    let estado = informacoes.uf
    console.log(cep, logradouro, bairro, cidade, estado)
  }

  const handleReq = async () => {
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {headers})
    const json = await resp.json()
    setInformacoes(json)
    insertCep();
  }

  return (
    <div>
        <Label texto="Digite seu CEP:"/>
        <Input tipo="text" value={cep} onChange={e=>setCep(e.target.value)}/>
        <Button onClick={handleReq}/>
        <h2>{informacoes ? informacoes.cep : 'carregando'}</h2>
        <h2>{informacoes ? informacoes.logradouro : ''}</h2>
        <h2>{informacoes ? informacoes.bairro : ''}</h2>
        <h2>{informacoes ? informacoes.localidade : ''}</h2>
        <h2>{informacoes ? informacoes.uf : ''}</h2>

        
    </div>
  )
}

export default Search