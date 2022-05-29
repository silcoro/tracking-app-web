import { Typography } from "@mui/material";
import React ,{ useEffect, useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Input } from "react-rainbow-components";
import { create_producto, getProducts } from "../../redux/action";

const inputStyles = {
    width: 210,
    
}

const cardStyle = {
    padding:'25px 5px 25px 5px',
    margin:'5px 0px 5px 0px',
    backgroundColor:'#f5f7f9'
}



const Product = () => {
    const dispatch = useDispatch()

    const [ values, setValues ] = useState({
        cargo:'',
        administrador:'',
        fechaLLegada:''
    })

const change = (e) => {
   setValues({
       ...values,
       [e.target.name]: e.target.value
   })
}

const formatearFecha = (valor) => {
    const formatDate = valor.toString().split('T')
    const format = formatDate[0].split('-')
    const fechaAnio = format[2]+ '/' + format[1] +'/' + format[0]
    const fechaFormateada = fechaAnio + ' - ' + formatDate[1]
    return fechaFormateada
    
}


const submit = (e) => {
    e.preventDefault()
    const formValues = {
        cargo: values.cargo,
        administrador: values.administrador,
        fechaLLegada: formatearFecha(values.fechaLLegada)
    }
dispatch(create_producto(formValues))
setValues({
    cargo:'',
    administrador:'',
    fechaLLegada:''
})

}


return (
    <form onSubmit={submit} className="Product_principal">
        
        <Card style={cardStyle}>
            <Typography variant="h5" style={{color:'black'}}>
                Ingresa Datos
            </Typography>
            <br/>
            <Input
                label="Cargo"
                placeholder="Ingresar Cargo"
                type="text"
                className="rainbow-p-around_medium"
                style={inputStyles}
                value={values.cargo}
                name='cargo'
                onChange={change}
            />
             <Input
                label="Administrador"
                placeholder="Ingresar Administrador"
                type="text"
                className="rainbow-p-around_medium"
                style={inputStyles}
                name='administrador'
                value={values.administrador}
                onChange={change}
            />
             <Input
                label="Fecha Llegada"
                type="datetime-local"
                className="rainbow-p-around_medium"
                style={inputStyles}
                name='fechaLLegada'
                value = {values.fechaLLegada}
                onChange={change}
            />
            <br/>
            <br/>
            <Button
            label="Registar"
            variant="brand"
            className="rainbow-m-around_medium"
            type="submit"
        />
        </Card>
    </form>
)
}

export default Product
