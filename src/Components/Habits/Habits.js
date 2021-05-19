import styled from 'styled-components'
import Header from '../Header'
import Menu from '../Menu'
import {useState} from 'react'
import EachDay from './eachDay'

export default function Habits(){
    const [add,setAdd] = useState(false)
    const [habit,setHabit] = useState('')
    const [showHabit,setShowHabit] = useState(false)
    const days = ['D','S','Q','Q','S','S']
    function createHabit(){
        //add ? setAdd(false) : setAdd(true)
        setShowHabit(true)
    }

   
    function check(){

        console.log(days)
    }
    return (
       
       <Background>
        <Header/>
        
        <Container showAdd={add} showHabit={showHabit} >
            <div>Meus hábitos <button onClick={createHabit}>+</button></div>
           
                <div className='createHabit' >
                <form>
                        <input placeholder="Nome do hábito..." 
                        onChange={(e)=>(setHabit(e.target.value))} 
                        value={habit}
                        />
                        
                        <div className='weekdays'>
                            {days.map((day, i) => {
                                return (
                                    <EachDay day={day} key={i} />
                                )
                            })}
                        </div>

                        <div className='cancel-submit'>

                            <p>Cancelar</p>  <button>Salvar</button>
                        </div>
                    </form>
                    
                </div>
            
         
            
            <p className='message'>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
             </p>
           

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
       // border: 1px solid red;
        flex-direction:column;
        margin-top:70px;
        align-items:center;

       

            .createHabit{

                width:340px;
            height:180px;
            //border:1px solid  black;
            display :${props=>props.showHabit ? 'flex' : 'none'};
            flex-direction:column;
            background-color:white;
            border-radius:5px;

            

                input{
                        width:303px;
                        height: 45px;
                        //border:1px solid #D5D5D5;
                        margin-top:10px;
                        padding-top:5px;

                    ::placeholder{
                    font-size:20px;
                    }
                }

                .weekdays{
                    width:210px;
                    height:32px;
                }

                .days{
                    width:30px;
                    height:30px;
                    color:#DBDBDB;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px solid #CFCFCF;
                }

                .cancel-submit{
                    font-size:15px;
                    display:flex;
                    width:150px;
                    height:40px;
                    margin-top:40px;
                    margin-left:150px;
                    justify-content:center;
                    align-items:center;                    
                    p{
                        color: #52B6FF;
                        width:70px;
                        height:20px;
                        margin-top:5px;
                       

                    }

                    button{
                        width:84px;
                        height:35px;
                        background-color: #52B6FF;
                        color:white;
                        //border-radius:4px;
                        


                    }
                }
            }
        
        .message{
            //border:1px solid green;
            width:338px;
            height:74px;
            font-size:18px;
            display: ${props=>props.showAdd ? 'none' : 'block'};
            margin-top:30px;
        }
        
        div{

        width:100%;
        display:flex;
        height: 75px;
        //border: 1px solid red;
        //border:1px solid yellow;
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

/*const CreateHabit = styled.div`
     
           width:340px;
            height:180px;
            //border:1px solid  black;
            display :${props=>props.showHabit ? 'block' : 'none'};


            input{
                    width:303px;
                    height: 45px;
                    border:1px solid #D5D5D5;
            }
    
`

*/
