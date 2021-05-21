import styled from 'styled-components'
import Button from '../ButtonComponent'
import {Link,useHistory} from 'react-router-dom'
import trackit from '../images/trackit.svg'
import {useState} from 'react'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Main({token,setToken,image,setImage}){
    const  [loginData,setLoginData] = useState({})
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    
   function login(){
        
        const body = {...loginData}
        
        setLoading(true)
        const promisse= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',body)
        
        promisse.then((response)=>{
            console.log('deu bom')
            console.log(response)
            setToken(response.data.token)
            setImage(response.data.image)
            
            const empty={}
            setLoginData(empty)
            setLoading(false)
            history.push('/hoje')

        }) 

        promisse.catch((responseError)=>{
            setLoading(false)
            console.log('deu ruim')
           
            const empty={}
            setLoginData(empty)
            
            
            
            if(responseError.response.status===401){
                alert("Usuário e/ou senha inválidos!")
                
            }else{
                alert('dados incorretos')
            }
         
            
            })
    }

    function SaveInfo(e,key){
    
        loginData[key]=e.target.value
        setLoginData({...loginData})
        
       
    }

    
    return (
    
    
        <Container>
    
            <img src={trackit}/>
           
           <input className='first' 
           type='text' 
           value={loginData.email || ''} 
           onKeyPress={(e)=>{if(e.code==="Enter"){login()}}} 
           placeholder='email' onChange={(e)=>SaveInfo(e,'email')}
           disabled={loading}    
           />
           
           <input type='password' 
           value={loginData.password || ''} 
           onKeyPress={(e)=>{if(e.code==="Enter"){login()}}} 
           placeholder='senha' onChange={(e)=>SaveInfo(e,'password')}
           disabled={loading}
           /> 
           
           <Button onClick={login}>{loading ? <Loader type="ThreeDots" color="#FFFFFF" height={40} width={80} /> : 'Entrar'}</Button>
           
           
           <Link to ='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
           
        </Container>
        
    
        )
    }
    
    const Container = styled.div `
        min-width:305px;
        min-height:178px;
        height:100vh;
       
        display:flex;
        flex-direction:column;
        margin: 0 auto;
        width:80%;
        align-items:center;
        justify-content:center;
        min-height :500px;
        
    
        input{
            width:303px;
            min-height: 45px;
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
            width:225px;
            height: 17px;
            font-size:13px;
            color:#52B6FF;
            margin: 20px 0;
        }
    
        
        .first{
                margin-top:20px;
            }
    `
