import React from "react";
import { Button, RenderIf, Spinner } from "react-rainbow-components";
import './Card.css'

export default function Card({ProductItem}){//listgames props que viene de mi Home.

const TypeDistrito = new Map()
TypeDistrito.set(1,'surco')
TypeDistrito.set(2,'surquillo')
TypeDistrito.set(3,'san martin')

const TypeStatus = new Map()
TypeStatus.set(1,'Recepción')
TypeStatus.set(2,'Clasificacion')
TypeStatus.set(3,'Proceso de Entrega')
TypeStatus.set(4,'Entregado')


    return(   
        
    ProductItem.length
            ?(             
                    <div>
                    <p>Actividades</p>
                    <table className="tabla-dinamica">
                        <thead >
                            <tr className="thead">
                                <th>Cargo</th>
                                <th>Administrador</th>
                                <th>Empleado</th>
                                <th>Dirección</th>
                                <th>Fecha Llegada</th>
                                <th>Fecha Salida</th>
                                <th>Distrito</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody >                            
                            {   
                            ProductItem.map(e=>{
                                return(
                                    <tr className="tbody" key={e.id}>
                                    <td>{e.cargo}</td>
                                    <td style={{width:'20px'}}>{e.administrador}</td>
                                    <td style={{width:'150px'}}>{e.empleado}</td>
                                    <td  style={{width:'150px'}}>{e.direccion}</td>
                                    <td   style={{width:'150px'}}>{(e.fechaLLegada)}</td>
                                    <td   style={{width:'150px'}}>{e.fechaSalida}</td>
                                    <td   style={{width:'150px'}}>{TypeDistrito.get(e.distritoId)}</td>
                                    <td  style={{width:'80px'}} >{TypeStatus.get(e.estado)}</td>
                                    <RenderIf isTrue={true}>
                                    <td>
                                        <Button
                                            label="Editar"
                                            // onBlur={() => alert('blurred!')}
                                            variant="Button Outline Brand"
                                            className="rainbow-m-around_medium"
                                            style={{height:'15px', width:'20px',
                                            fontSize:'12px'
                                    }}
                                        />
                                    </td>
                                    </RenderIf>
                                    
                                    </tr>
                                )
                            }
                            )                       
                            
                            }
                            
                        </tbody>
                    </table>
                </div>
                
            )
            :<div
            className="rainbow-align-content_center rainbow-position_relative rainbow-p-vertical_xx-large"
            style={{
                width:'900px'
            }}
        >
            <Spinner variant="brand" size="medium" />
            {/* <Loading className="rainbow-font-size-text_medium rainbow-p-top_xx-large rainbow-m-top_xx-large rainbow-m-bottom_large">
                Loading…
            </Loading> */}
        </div>
    )
}