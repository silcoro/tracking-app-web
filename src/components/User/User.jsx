import { Typography } from '@mui/material'
import React, { useState } from 'react'
import {Button, Card, Input} from 'react-rainbow-components'
import './User.css'
import logo from '../../imagenes/logo.svg'
import { useHistory } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { useDispatch } from 'react-redux'

const inputStyles = {
    width: 300,
    
}

const User = () => {
    const history = useHistory()
    const dispatch = useDispatch()
const [values, setValues] = useState({
    usuario:'',
    password:''
})

const handleOnChange = e =>{// funcion valores simples
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })

}


const submit = e =>{
    e.preventDefault()
console.log('values', values)
// dispatch()
setValues({ 
    usuario:'',
password:''})
history.push("/index/Home")
}


    return (
        <div>
            <Nav/>
            <div>
                <form onSubmit={submit} >
                <div  className='user_principal'>  
                <img src={logo} alt='logo' className='logo_principal'/>
                <div className='user_card'>
                <Card
                style={{
                    padding:50
                }}
                >
                
                <Typography variant="h5" style={{color:'black'}}> 
                        Iniciar Sessión
                </Typography>
                <br/>
                <Input
                    label="Usuario"
                    placeholder="Ingresar Usuario"
                    type="email"
                    className="rainbow-p-around_medium"
                    value={values.usuario}
                    onChange={handleOnChange}
                    name='usuario'
                    style={inputStyles}
                    required
                />
                <br/>
                    <Input
                    label="Clave"
                    placeholder="Ingresar Clave "
                    type="password"
                    className="rainbow-p-around_medium"
                    value={values.password}
                    onChange={handleOnChange}
                    name='password'
                    style={inputStyles}
                    required
                />
                <br/>
                <Button
                    label="Ingresar"
                    variant="brand"
                    className="rainbow-m-around_medium"
                    type='submit'
                />
                </Card>
                </div>         
                
                </div>
                 </form>
            </div>
        </div>
    )


}

export default User