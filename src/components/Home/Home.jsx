import React from 'react'
import logo from '../../imagenes/repartidor.jpg'
import './Home.css'

const Home = () => {


    return (
<div className='home_principal'>
    <p style={{color:'#2a4798', fontSize:'45px', fontFamily:'monospace', fontWeight:600}}>
        Empresa en Brindar Servicio de Entrega
    </p>
    <img src={logo} alt='por' style={{width:'50%'}} />
</div>

    )

}

export default Home