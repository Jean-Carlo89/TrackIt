import axios from 'axios'
import { useEffect , useState} from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Menu from '../Menu'

import {useContext} from 'react'
import TokenContext from '../../Contexts/TokenContext'



import {FaCheckSquare} from 'react-icons/fa';

export default function Today({habitsList,setHabitsList,completedHabits,setCompletedHabits}){
    const {token,image}= useContext(TokenContext)
    //const [habitsList,setHabitsList] = useState([])
    
    //const [completedHabits,setCompletedHabits] = useState([])

    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        console.log('token :'+token)
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config)
        
        .then((response)=>{
            console.log('requisicao da pagina hoje passou')
            console.log(response)
            setHabitsList(response.data)
        })

             
        .catch((responseError)=>{
            console.log('requisicao da pagina hoje deu erro')
            console.log(responseError)
        })

     },[])

     function test(){
         console.log('Lista de habitos do servidor:')
         console.log(habitsList)
         console.log('Lista de habitos marcados como compelto:')
         console.log(completedHabits)
         console.log('token :'+token)
     }
    return(
        <Background>
             <Header/>
            
            <Container>
                <button onClick={test}>testar dados</button>
                <HabitInfo>
                    <div>
                    <h1>Hoje, 20/05</h1>
                    <h2 className={completedHabits.length<1 ? '' : 'selected'}>{completedHabits.length<1 ? 'Nenhum hábito concluído ainda' : `${(completedHabits.length/habitsList.length)*100}% dos hábitos concluídos`}</h2>
                    </div>
                </HabitInfo>

                <TodayHabits>
                    {habitsList.map((habit)=>{
                        
                        return(
                        <li key={habit.id} id={habit.id}>
                            <h1>{habit.name}</h1>
                            <h3>Sequencia atual: {habit.currentSequence}</h3>
                            <h3>Seu recorde: {habit.highestSequence}</h3>
                            <button className={completedHabits.includes(habit.id) || habit.done===true ? 'selected' :''} onClick={()=>toggleCompleteHabit(habit.id)} ><FaCheckSquare/></button>
                        </li>
                        )

                    })

                    }
                </TodayHabits>

            </Container>  
            
            <Menu/>
        </Background>
        )


        function toggleCompleteHabit(id){
            console.log(id)
            console.log(completedHabits)
            if(completedHabits.includes(id)){
                const newCompletedHabits = completedHabits.filter((item)=>(item!==id))
                setCompletedHabits([...newCompletedHabits])
            }else{
                const newCompletedHabits2 = [...completedHabits,id]
                setCompletedHabits(newCompletedHabits2)

                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
                const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,config)
                
                promisse.then((response)=>{
                    console.log('habito marcado como completo pelo servidor')
                    console.log(response)
                })

                 
                promisse.catch((responseError)=>{
                    console.log('Erro na marcao do habito pelo servidor')
                    console.log(responseError)
                })
            }
            console.log(completedHabits)

            

        }
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
        height: auto;
        border: 1px solid red;
        flex-direction:column;
        margin-top:70px;
        align-items:center;
        margin-bottom:60px ;
`

const HabitInfo = styled.div`
    width: 100%;
    height: 100px;
    //background-color: gray;
    display: flex;
    flex-direction: column;
   justify-content: center;

        div{
            
            border: 1px solid blue;
            //margin-top: 10px;
            margin-left: 20px;
        }

        h1{
            color: #126BA5;
            font-size: 23px;
        }

        h2{
            font-size: 18px;
            color: #BABABA;

        }

        h2.selected{
            color: green;
        }

`

const TodayHabits = styled.ul`
    width: 100%;
    height: auto;
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    li{
        margin-top: 5px;
        margin-bottom: 10px;
        background-color: white;
        width: 340px;
        height: 94px;
        border-radius: 5px;
        position: relative;
    }

    h1{
        width: auto;
        height: 25px;
        font-size: 20px;
        margin-top:10px;

    }

    h3{
        font-size: 12px;
        width: 148px;
        height: 32px;
        margin-bottom: -16px;
    }

    button{
        position: absolute;
        top: 12px;
        right: 5px;
        border:1px solid red;
        background-color: white;
        padding: 0;
        

        svg{
            width: 69px;
            height: 69px;
            background-color: white;
            color: gray;
         
        }

       
    }

    .selected{
            
            svg{
                color: green;
            }

        }
`