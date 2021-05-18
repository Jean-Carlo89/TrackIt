import styled from 'styled-components'
import Button from '../ButtonComponent'
import {Link} from 'react-router-dom'
import trackit from '../images/trackit.svg'

export default function Main(){
    return (
    
    
        <Container>
    
            <img src={trackit}/>
           <input className='first' type='text' value='' placeholder='email'></input> 
           <input type='password' value='' placeholder='senha'></input> 
           <Button>Entrar</Button>
           
           <Link to ='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
           </Link>
           
        </Container>
        
    
        )
    }
    
    const Container = styled.div `
        min-width:305px;
        height:100vh;
       // background-color:lightblue;
        display:flex;
        flex-direction:column;
        margin: 0 auto;
        width:80%;
        align-items:center;
        justify-content:center;
    
        input{
            width:303px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius:5px;
            padding-left:10px;
            margin-bottom:5px;
    
           
            ::placeholder{
                font-size:20px;
                
            }
        }
    
        p{
            width:210px;
            height: 17px;
            font-size:13px;
            color:#52B6FF;
            margin: 20px 0;
        }
    
        
        .first{
                margin-top:20px;
            }
    `
