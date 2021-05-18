import styled from 'styled-components'
import Button from '../ButtonComponent'
import {Link} from 'react-router-dom'
import trackit from '../images/trackit.svg'
import {useState} from 'react'

export default function SignIn(){
    const  [inputData,setInputData] = useState({})
    
   function Test(e,key){
    
    inputData[key]=e.target.value
    setInputData({...inputData})
    console.log(inputData)
   
}
   
    return (
        
        <Container>
    
            <img src={trackit} alt='logo'/>
            <button onClick={Test}>testar objeto</button>
          
           <input className='first' type='text' value={inputData.email || ''} 
           placeholder='email' 
           onChange={(e)=>Test(e,'email')}/> 
          
          
           
          <input className='first' type='password' value={inputData.password || ''} 
           placeholder='password' 
           onChange={(e)=>Test(e,'password')}/>

            
        <input className='first' type='text' value={inputData.name || ''} 
           placeholder='name' 
           onChange={(e)=>Test(e,'name')}/>

            
        <input className='first' type='text' value={inputData.image || ''} 
           placeholder='image' 
           onChange={(e)=>Test(e,'image')}/>
           <Button onClick={()=>Test()}>Entrar</Button>
           
           <Link to='/'>
            <p>Já tem uma conta? Faça login!</p>
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

