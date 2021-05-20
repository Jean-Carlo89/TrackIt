import styled from 'styled-components'
import Header from '../Header'
import Menu from '../Menu'
import {useState,useEffect} from 'react'
import EachDay from './eachDay'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import TokenContext from '../../Contexts/TokenContext'
import { FaBeer } from 'react-icons/fa';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import {FaRegTrashAlt} from 'react-icons/fa'

export default function Habits(){
    const [addHabit,setAddHabit] = useState(false)
    const [habit,setHabit] = useState('')
    const [showHabit,setShowHabit] = useState(false)
    const [chosendays,setChosenDays] = useState([])
    const [cancel,setCancel] = useState(false)
    const [loading,setLoading] = useState(false)
    
    const value= useContext(TokenContext)
    
    const [habitsList,setHabitsList] = useState([])

    const history = useHistory()
    
    
    const days = ['D','S','T','Q','Q','S','S']
    
    useEffect(()=>{
       // console.log('lista de habitos assim que entra na pagina')
        //console.log(habitsList)
        const config = {
            headers: {
                "Authorization": `Bearer ${value}`
            }
        }
       
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
        
        requisition.then((response)=>{
            console.log('a requisicao deu certo')
            console.log(response)
            setHabitsList(response.data)
            
        })

        requisition.catch((responseError)=>{
            console.log('a requisicao falhou')
            console.log(responseError.response)
        })

      if(habitsList.length===0 ){
        
        setShowHabit(true)
        console.log('passow por showhabit true')
      }else{
        setShowHabit(false)
        console.log('passow por showhabit false')
      }
       // habitsList.length===0 ? setShowHabit(true) : setShowHabit(false)
    },[])

    function requestHabitsList(){
        const config = {
            headers: {
                "Authorization": `Bearer ${value}`
            }
        }
        
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
        
        requisition.then((response)=>{
            console.log('a requisicao deu certo')
            console.log(response)
            setHabitsList(response.data)
            
        })

        requisition.catch((responseError)=>{
            console.log('a requisicao falhou')
            console.log(responseError.response)
        })
    }

   
    
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
                                return (
                                    <EachDay day={day} 
                                    key={i} 
                                    id={i} 
                                    days={chosendays} 
                                    cancel={cancel}
                                    setCancel={setCancel}
                                    setDays={setChosenDays}
                                    loading={loading} 
                                    />
                                )
                            })}
                        </div>
                        

                        <div className='cancel-submit'>

                            <p onClick={cancelHabit}>Cancelar</p>  <button className='send' disabled={loading} onClick={saveNewHabit}>Salvar</button>
                        </div>
                    
                    
                </div>
            
         
                <button onClick={check}></button>

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
                
            
            <p className='message'>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
             </p>
           

        </Container>
        
        <Menu/>
        
        </Background>
     
        )


        function createHabit(){
            //add ? setAdd(false) : setAdd(true)
            setAddHabit(true)
            setChosenDays([])
        }
        
        
        function check(){
        
            //console.log(days)
            console.log('dias escolhidos')
            console.log(chosendays)
            console.log('habito :' +habit)
            console.log('valor do token :'+value)
            console.log('lista de habitos')
            console.log(habitsList)
            console.log('estado do showhabit')
            console.log(showHabit)
            console.log('estado do addHabit')
            console.log(addHabit)
            console.log('estado do loading')
            console.log(loading)

        }

        function deleteHabit(e,id){
            
            const r = window.confirm('Are you sure you wish to delete this item?')

            if(!r){
                return
            }
           
            console.log(id)
            const config = {
                headers: {
                    "Authorization": `Bearer ${value}`
                }
            }
            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config)
            
            promisse.then((response)=>{
                console.log('deletou')
                console.log(response)
            })

            promisse.catch((responseError)=>{
                console.log('erro no delete')
                console.log(responseError)
            })

            requestHabitsList()
        }

        
        function cancelHabit(){
            setAddHabit(false)
        }
        
        function saveNewHabit(){
            
            const config = {
                headers: {
                    "Authorization": `Bearer ${value}`
                }
            }
            
            const habitObject={
                name:habit,
                days:chosendays
            }

           /* setChosenDays([])
            setHabit('')
            setCancel(true)
            setAddHabit(false)*/
            setLoading(true)
            const promisse= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',habitObject,config)
        
            promisse.then((response)=>{
              
                
                console.log('novo habito criado')
                console.log(response)
                setLoading(false)

                setChosenDays([])
            setHabit('')
            setCancel(true)
            setAddHabit(false)
           // history.push('/habitos')

           const config = {
            headers: {
                "Authorization": `Bearer ${value}`
            }
        }
       
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
        
        requisition.then((response)=>{
            console.log('a requisicao deu certo')
            console.log(response)
            setHabitsList(response.data)
            
        })

        requisition.catch((responseError)=>{
            console.log('a requisicao falhou')
            console.log(responseError.response)
        })

       // checkHabitsList()
        habitsList.length===0 ? setShowHabit(true) : setShowHabit(false)

        
            })
        
            promisse.catch((responseError)=>{
                console.log('Erro na criacao de habito')
                console.log(responseError)
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
       // border: 1px solid red;
        flex-direction:column;
        margin-top:70px;
        align-items:center;
        margin-bottom:60px ;

       

            .createHabit{

                width:340px;
                height:180px;
                //border:1px solid  black;
                display :${props=>props.addHabit ? 'flex' : 'none'};
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
                    margin-right: 90px;
                }

                .days{
                    width:30px;
                    height:30px;
                    color:#DBDBDB;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px solid #CFCFCF;
                    background-color: white;
                    
                }

                .days.selected{
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
                        //border-radius:4px;
                        


                    }
                }
            }
        
        .message{
            //border:1px solid green;
            width:338px;
            height:74px;
            font-size:18px;
            display: ${props=>props.showHabit ? 'block' : 'none'};
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

       .habit1{
        width:340px;
            height:90px;
            //border:1px solid  black;
            
            flex-direction:column;
            background-color:white;
            border-radius:5px;
            margin: 10px 0;
            position: relative;

            h2{
                width:303px;
                        height: 45px;
                        //border:1px solid #D5D5D5;
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
                    //margin-bottom: 20px;
                    
                }

                .normaldiv{
                    height: auto;
                    width: auto;
                }

                .trash{
                    display: inline;
                    //border: 1px solid blue;
                   
                   position: absolute;
                   top: 10px;
                    right: 10px;
                    color :red;
                   //margin-left: 300px;
                    
                }
       }
        
       
`

/*
const Habit = styled.div`
            width:340px;
            height:90px;
            //border:1px solid  black;
            display :${props=>props.showHabit ? 'flex' : 'none'};
            flex-direction:column;
            background-color:white;
            border-radius:5px;

`
*/
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
{/*isSelected={isSelected}
                                setIsSelected={setIsSelected}*/}