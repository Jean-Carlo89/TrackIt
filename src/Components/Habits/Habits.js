import styled from 'styled-components'
import Header from '../Header'
import Menu from '../Menu'
import {useState,useEffect} from 'react'

import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import TokenContext from '../../Contexts/TokenContext'
import { FaBeer } from 'react-icons/fa';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import {FaRegTrashAlt} from 'react-icons/fa'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Habits(){
    const [addHabit,setAddHabit] = useState(false)
    const [habit,setHabit] = useState('')
    const [showHabit,setShowHabit] = useState(false)
    const [chosendays,setChosenDays] = useState([])
    const [cancel,setCancel] = useState(false)
    const [loading,setLoading] = useState(false)
    
    const {token,image}= useContext(TokenContext)

    const [isSelected,setIsSelected] = useState(false)
    
    const [habitsList,setHabitsList] = useState([])

    const history = useHistory()

    const[firstLoad,setFirstLoad] = useState(false)
    
    
    const days = ['D','S','T','Q','Q','S','S']
    
    useEffect(()=>{
        
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
       
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
        
        requisition.then((response)=>{
          
            setHabitsList(response.data)
           
            
        })

        requisition.catch((responseError)=>{
           
        })

     
    },[])

    function requestHabitsList(){
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
        
        requisition.then((response)=>{
           
            setHabitsList(response.data)
            
        })

        requisition.catch((responseError)=>{
            
        })
    }


    
    function selectDays(dayNumber){
        
         
       

         if(chosendays.includes(dayNumber)){
             const newChosenDays = chosendays.filter((d)=>(d!==dayNumber))
             setChosenDays([...newChosenDays])
         }else{
             const newChosenDays2 = [...chosendays,dayNumber]
             setChosenDays(newChosenDays2)
         }
     }

   
     if(firstLoad){
         return(
           <div> <Loader type="ThreeDots" color="#FFFFFF" height={1000} width={1000} /></div>
         )
     }else{
    
    return (
       
       <Background>
        <Header/>
        
        <Container addHabit={addHabit} showHabit={showHabit} >
            <div className='title'>Meus hábitos <button classname='add' onClick={createHabit}>+</button></div>
           
                <div className='createHabit' >
                
                        <input placeholder="Nome do hábito..." 
                        onChange={(e)=>{setHabit(e.target.value)}} 
                        value={habit}
                        disabled={loading}
                        />
                        
                        <div className='weekdays'>
                            {days.map((day, i) => {
                                return(
                                <DaysDiv className={chosendays.includes(i) ? 'selected' :''} onClick={()=>selectDays(i)} key={i} id={i}>{day}</DaysDiv>
                                )
                             })}
                        </div>
                        

                        <div className='cancel-submit'>

                            <p onClick={cancelHabit}>Cancelar</p>  <button className='send' disabled={loading} onClick={saveNewHabit}>{loading ? <Loader type="ThreeDots" color="#FFFFFF" height={40} width={80} /> :'Salvar'}</button>
                        </div>
                    
                    
                </div>
            
         
               

                <ul>
                {habitsList.map((item)=>{

                    return (
                    < li className='habit1' key={item.id} id={item.id}>
                        <h2>{item.name}</h2>  <div className='normaldiv' onClick={(e,id)=>deleteHabit(e,item.id)}><span className='trash'>< FaRegTrashAlt/> </span></div>
                        <div className='weekdays1'>
                            {item.days.map((day,i)=>{
                                return(
                                <div className={`days1`} key={i}>
                                    {days[day]}
                                </div>
                                )
                            })}
                        </div>
                    </li>
                    )
                    
                }).reverse()}
                </ul>
                
            
            {!habitsList || habitsList.length===0 ? <p className='message'>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
             </p>: ''} 
           

        </Container>
        
        <Menu/>
        
        </Background>
     
        )}


        function createHabit(){
            
            setAddHabit(true)
            
        }
        
       

        function deleteHabit(e,id){
            
            const r = window.confirm('Are you sure you wish to delete this item?')

            if(!r){
                return
            }
           

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config)
            
            promisse.then((response)=>{
                
            })

            promisse.catch((responseError)=>{
               
            })

            requestHabitsList()
        }

        
        function cancelHabit(){
            setAddHabit(false)
        }
        
        function saveNewHabit(){
            
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            
            const habitObject={
                name:habit,
                days:chosendays
            }

          
            setLoading(true)
            const promisse= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',habitObject,config)
        
            promisse.then((response)=>{
              
                
                
                setLoading(false)

            setChosenDays([])
            setHabit('')
            setCancel(true)
            setAddHabit(false)
           

           const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
       
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
        
        requisition.then((response)=>{
           
            setHabitsList(response.data)
            
        })

        requisition.catch((responseError)=>{
           
        })

       
        habitsList.length===0 ? setShowHabit(true) : setShowHabit(false)

        
            })
        
            promisse.catch((responseError)=>{
                
                setLoading(false)
        
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
        height: auto;
       
        flex-direction:column;
        margin-top:70px;
        align-items:center;
        margin-bottom:60px ;

       

            .createHabit{

                width:340px;
                height:180px;
                
                display :${props=>props.addHabit ? 'flex' : 'none'};
                flex-direction:column;
                background-color:white;
                border-radius:5px;

            

                input{
                        width:303px;
                        height: 45px;
                        
                        margin-top:10px;
                        padding-top:5px;

                    ::placeholder{
                    font-size:20px;
                    }
                }

                .weekdays{
                    width:210px;
                    height:32px;
                    margin-right: 90px;


                    .days{
                    width:30px;
                    height:30px;
                    color:#DBDBDB;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px solid #CFCFCF;
                   
                    color: gray;
                    
                }
                }

                

                .selected{
                        background-color: #CFCFCF;
                        color: white;
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
                        
                        


                    }

                    
                }
            }
        
        .message{
            
            width:338px;
            height:74px;
            font-size:18px;
           
            margin-top:30px;
        }
        
        div{

        width:100%;
        display:flex;
       
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

       .habit1{
        width:340px;
            height:90px;
            
            
            flex-direction:column;
            background-color:white;
            border-radius:5px;
            margin: 10px 0;
            position: relative;

            h2{
                width:303px;
                        height: 45px;
                        
                        margin-top:10px;
                        padding-top:5px;
                        font-size: 20px;
                        margin-left: 10px;
            }

            .weekdays1{
                    width:auto;
                    height:32px;
                    margin-left: 10px;
                    display: flex;
                    justify-content: flex-start;
                }

                .days1{
                    width:30px;
                    height:30px;
                    color:#DBDBDB;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px solid #CFCFCF;
                    margin-right: 5px;
                    
                    
                }

                .normaldiv{
                    height: auto;
                    width: auto;
                }

                .trash{
                    display: inline;
                    
                   
                   position: absolute;
                   top: 10px;
                    right: 10px;
                    color :red;
                   
                    
                }
       }
        
       
`

const DaysDiv = styled.div`
        width:30px;
        height:30px;
        color:#DBDBDB;
        display:flex;
        justify-content:center;
        align-items:center;
        border:1px solid #CFCFCF;
        background-color: white;
        color: gray;

        &.selected{
            background-color: #CFCFCF;
            color: white;
        }
`
