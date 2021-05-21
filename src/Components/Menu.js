import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Circle from '../images/menuCircle.svg'

import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import PercentageContext from '../Contexts/PercentageContext';

export default function Menu(){

    const {habitsList,completedHabits} = useContext(PercentageContext)
    const percentage = ((completedHabits.length/habitsList.length)*100);
    function test(){

        console.log(habitsList)
        console.log(completedHabits)

    }
    return(
        <MenuContainer>
            <button onClick={test}>testar</button>
            
            <Link to='/habitos'>
                <p>Hábitos</p>
            </Link>
            
            {/*<Link to='/hoje'>
            <img src={Circle}/>
    */}
       
       <Link to='/hoje'>
        <div className='progressbar'>
            {    <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />}
      </div>
      </Link>
           <Link to='/historico'>
            <p>Histórico</p>
           </Link> 
            
        </MenuContainer>
    )
}


const MenuContainer = styled.footer`
 min-width:375px;
 width:100%;
 height:60px;
 background-color:white;
 display:flex;
 justify-content:space-around;
 align-items:center;
 position:fixed;
 bottom:0;
 right:0;
 z-index:85;

 p{
     
     color:#52B6FF;
 }

 img{
     margin-bottom:50px;
 }

 .progressbar{
     width: 100px;
     height: 100px;
     margin-bottom: 50px;
 }
`