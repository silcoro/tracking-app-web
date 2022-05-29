import React from "react";
import { Card, Lookup, RenderIf } from "react-rainbow-components";
import { NavLink } from "react-router-dom";
import ListProduct from "../Product/ListProduct";
import Product from "../Product/Product";
import './Nav.css'
import '../Product/Product.css'


const containerStyles = {
    width: 400
};

const NavBar = () => {


return (
    <div>
            <header className="header-navbar">
                <nav className="navbar">       
                    <ul >
                        <li className='list-item' >               
                            <div>
                                <NavLink className="navlink" exact to="/index/Home" >
                                    Inicio
                                </NavLink>
                            </div>
                        </li>
                        <li className='list-item'>
                        <Lookup
                        id="lookup-1"
                        // label="Buscar"
                        placeholder="Buscar"
                        // options={state.options}
                        // value={state.option}
                        // onChange={option => setState({ option })}
                        // onSearch={search}
                        style={containerStyles}
                    />
                        </li>
                    </ul>
                   
                </nav>
            </header>
            <body>
            
                <div className="body_principal">
                    <div className="body_product">
                        <RenderIf isTrue={true}>
                        <Product/>
                        </RenderIf>                    
                    </div>
                    <div>
                        <Card style={{padding:'10px', width:'80vw' , height:800}}>
                        <ListProduct/>
                        </Card>
                   
                    </div>
                
                
                </div>
                
            </body>
    </div>
)


}

export default NavBar