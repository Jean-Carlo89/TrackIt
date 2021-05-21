import axios from 'axios'
import { useEffect , useState} from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Menu from '../Menu'

import {useContext} from 'react'
import TokenContext from '../../Contexts/TokenContext'

import dayjs from 'dayjs'



import {FaCheckSquare} from 'react-icons/fa';

export default function Today({habitsList,setHabitsList,completedHabits,setCompletedHabits}){
    const {token,image}= useContext(TokenContext)
    require('dayjs/locale/pt-br')
    dayjs.locale('pt-br')
   

    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
     
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config)
        
        .then((response)=>{
            
            
            setHabitsList(response.data)

            
            const newArray = response.data.filter((habit)=>{
                if(habit.done===true){
                    return true
                }
        })

        setCompletedHabits(newArray)
           

           
            
          

           
        })

             
        .catch((responseError)=>{
            
           
        })

     },[])

     
    return(
        <Background>
             <Header/>
            
            <Container>
                
                <HabitInfo>
                    <div>
                    <h1>{`${dayjs().format('dddd')},${dayjs().format('D/MM')}`}</h1>
                    <h2 className={completedHabits.length<1 ? '' : 'selected'}>{completedHabits.length<1 ? 'Nenhum hábito concluído ainda' : `${((completedHabits.length/habitsList.length)*100).toFixed(0)}% dos hábitos concluídos`}</h2>
                    </div>
                </HabitInfo>

                <TodayHabits>
                    {habitsList.map((habit)=>{
                        
                        return(
                        <li key={habit.id} id={habit.id}>
                            
                            <h1>{habit.name}</h1>
                            <h3>Sequencia atual: <em className={ habit.done===true ? 'selected' :''}>{habit.currentSequence}</em></h3>
                            <h3>Seu recorde: {habit.highestSequence}</h3>
                            
                            <button className={ habit.done===true ? 'selected' :''} onClick={()=>toggleCompleteHabit(habit.id,habit.done)} ><FaCheckSquare/></button>
                        </li>
                        )

                    })

                    }
                </TodayHabits>

            </Container>  
            
            <Menu/>
        </Background>
        )


        function toggleCompleteHabit(id,done){
           
            
           

            if(!done){

                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
                const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},config)
                
                promisse.then((response)=>{
                    
                    update(id)
                })

                 
                promisse.catch((responseError)=>{
                    
                })

            }else{
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
                const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},config)
                
                promisse.then((response)=>{
                   
                    update(id)
                })

                 
                promisse.catch((responseError)=>{
                   
                })
            }   

        }

        function update(id){

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
           
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config)
            
            .then((response)=>{
               
                setHabitsList(response.data)
                
                
                const newArray = response.data.filter((habit)=>{
                        if(habit.done===true){
                            return true
                        }
                })

                setCompletedHabits(newArray)
            })
    
                 
            .catch((responseError)=>{
               
            })
    
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
        min-height: 500px;
        height: auto;
       
        flex-direction:column;
        margin-top:70px;
        align-items:center;
        margin-bottom:60px ;
`

const HabitInfo = styled.div`
    width: 100%;
    height: 100px;
    
    display: flex;
    flex-direction: column;
   justify-content: center;

        div{
            
           
            
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
                color: #8FC549;
            }

        
           

        

       

`

const TodayHabits = styled.ul`
    width: 100%;
    height: auto;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    
    li{
        margin-top: 5px;
        margin-bottom: 10px;
        background-color: white;
        width: 340px;
        height: 94px;
        border-radius:4px;
      
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

        

        em.selected{
        color: #8FC549;
        }
    
    }
    button{
        position: absolute;
        top: 12px;
        right: 5px;
       
        background-color: white;
        padding: 0;
        border: none;
        

        svg{
            width: 69px;
            height: 69px;
            background-color: white;
            color: gray;
            
         
        }

       
    }

    .selected{
            
            svg{
                color: #8FC549;
            }

        }
`