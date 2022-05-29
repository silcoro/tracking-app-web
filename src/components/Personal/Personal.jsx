import { Typography } from "@mui/material";
import React from "react";
import { Button, Card, Input } from "react-rainbow-components";
import './Personal.css'

const inputStyles = {
    width: 300,
    
}



const Personal = () => {
return (
    <div className="personal_principal">
        
        <Card style={{padding:'70px', backgroundColor:'#fffbe5'}}>
            <Typography variant="h5" style={{color:'black'}}>
            
                Ingresa Datos del Personal
            
            </Typography>
            <br/>
            <Input
                label="Nombre"
                placeholder="Ingresar Nombre"
                type="text"
                className="rainbow-p-around_medium"
                style={inputStyles}
            />
             <Input
                label="Apellidos"
                placeholder="Ingresar Apellido"
                type="text"
                className="rainbow-p-around_medium"
                style={inputStyles}
            />
             <Input
                label="Telefono"
                placeholder="Ingresar Telefono "
                type="text"
                className="rainbow-p-around_medium"
                style={inputStyles}
            />
             <Input
                label="Direccion"
                placeholder="Ingresar Direccion"
                type="text"
                className="rainbow-p-around_medium"
                style={inputStyles}
            />
             <Input
                label="Email"
                placeholder="Ingresar Email"
                type="text"
                className="rainbow-p-around_medium"
                style={inputStyles}
            />
            <br/>
            <br/>
            <Button
            label="Registar"
            onClick={() => alert('clicked!')}
            variant="brand"
            className="rainbow-m-around_medium"
        />
        </Card>
    </div>
           
)
}

export default Personal
