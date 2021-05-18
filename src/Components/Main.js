import styled from 'styled-components'
import Button from '../ButtonComponent'
import {Link,useHistory} from 'react-router-dom'
import trackit from '../images/trackit.svg'
import {useState} from 'react'
import axios from 'axios'


export default function Main(){
    const  [loginData,setLoginData] = useState({})
    const [token,setToken] = useState('')
   const history = useHistory()
    function login(){
        //console.log(loginData)
        const body = {...loginData}
        //console.log(login)
        const promisse= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',body)
        
        promisse.then((response)=>{
            console.log('deu bom')
            console.log(response)

        }) 

        promisse.catch((responseError)=>{
            console.log('deu ruim')
           // console.log(responseError)
            //const empty={}
            //setLoginData({})
            //console.log(responseError.response)
            
           
            if(responseError.response.status===401){
                alert("Usuário e/ou senha inválidos!")
                
            }else{
                alert('dados incorretos')
            }
         
            //alert('dados incorretos')
                
            
           


        })
    }

    function SaveInfo(e,key){
    
        loginData[key]=e.target.value
        setLoginData({...loginData})
        //console.log(loginData)
       
    }

    function teste(){
        console.log(loginData)
    }
    return (
    
    
        <Container>
    
            <img src={trackit}/>
           <button onClick={teste}>sas</button>
           <input className='first' type='text' value={loginData.email || ''}  placeholder='email' onChange={(e)=>SaveInfo(e,'email')}></input> 
           
           <input type='password' value={loginData.password || ''} placeholder='senha' onChange={(e)=>SaveInfo(e,'password')}></input> 
           
           <Button onClick={login}>Entrar</Button>
           
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
