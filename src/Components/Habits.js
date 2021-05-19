import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'
import {useState} from 'react'

export default function Habits(){
    const [add,setAdd] = useState(false)

    function changeAddState(){
        add ? setAdd(false) : setAdd(true)
    }

    function checkAdd(){
        console.log(add)
    }
    return (
       
       <Background>
        <Header/>
        
        <Container>
            <div>Meus hábitos <button onClick={changeAddState}>+</button></div>
            <button onClick={checkAdd}>add state</button>
            
            <div className='create-habit'>

            </div>
            
            {add ? '' :<p className='message'>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
             </p>}
           

        </Container>
        <Menu/>
        </Background>
     
        )
}

const Background = styled.div`
 width:100%;
 min-height:100vh;
 background-color:#E5E5E5;
 display:flex;
 flex-direction:column;
 align-items:center;
 

`

const Container = styled.div` 
        width:95%;
        display:flex;
        height: 700px;
        border: 1px solid red;
        flex-direction:column;
        margin-top:70px;
        align-items:center;

        .create-habit{
            width:340px;
            height:180px;
            border:1px solid  black;
        }
        
        .message{
            border:1px solid green;
            width:338px;
            height:74px;
            font-size:18px;
        }
        div{

        width:100%;
        display:flex;
        height: 75px;
        border: 1px solid red;
        border:1px solid yellow;
        justify-content:space-between;
        align-items:center;
        font-size: 23px;
        color: #126BA5;

         
        }

        button{
            width:40px;
            height:35px;
            background-color:#52B6FF;
        }
        
       
`


