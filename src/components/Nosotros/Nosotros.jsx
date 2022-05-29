import React from "react";
import logo from '../../imagenes/repartidor_nosotros.jpg'
import Nav from "../Nav/Nav";

const Nosotros = () => {


 return(
     <div>
         <Nav/>
         <div  className='home_principal'>
         <img src={logo} alt='nosotros'/>
         <div style={{ width:'400px'}}>
             <h3>Almacenamiento</h3>
             <p  style={{color:'#2a4798', fontSize:'15px', fontFamily:'monospace', fontWeight:600}} >             
               ServiCarla Brinda servicios de almacenamiento el cual se encarga de la recepcion,clasificacion, verificación y ubicación de su mercancia dándole el buen trato,establecidos por nuestros clientes.

                Nuestras areas de almacenamiento cuentan con tecnología de seguridad en vigilancia.
             </p>
             <br/>
             <h3>VENTAJAS</h3>
             <p  style={{color:'#2a4798', fontSize:'15px', fontFamily:'monospace', fontWeight:600}}>  
             <ul>
                 <ol>
                -  Seguridad en nuestras instalaciones y procesos que garantizan la integridad de sus productos.
                 </ol>
                 <ol>
               -  Incrementa la flexibilidad de su operación
                 </ol>
             
               
        </ul>           
                
             </p>

         </div>
         </div>
         
     </div>
 )

}

export default Nosotros
