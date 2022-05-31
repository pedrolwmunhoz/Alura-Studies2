import React from 'react';
import Botao from '../botao';
import './style.scss';

class Formulario extends React.Component{
    render(){
        return(
            <form className='novaTarefa'>
               
               
                
                
                <div className='inputContainer'> 
                    <input
                        type = "email"
                        name = "user"
                        id   = "user"
                        placeholder="Email ou telefone"
                        
                    />
                </div>

                <div className='inputContainer'>
                    
                    <input
                        type = "password"
                        name = "pass"
                        id   = "pass"
                        placeholder='Senha'
                        
                    />
                </div>
                <Botao/>

                

            </form>

        )
    }
}
export default Formulario;