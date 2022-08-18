import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'

const Search = () => {
  return (
    <div>
        <Label texto="Digite seu CEP:"/>
        <Input tipo="text"/>
        <Button onClick={console.log("funciono")}/>
    </div>
  )
}

export default Search