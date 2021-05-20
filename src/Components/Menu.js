import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Circle from '../images/menuCircle.svg'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu(){
    const percentage = 66;
    return(
        <MenuContainer>
            <Link to='/habitos'>
                <p>Hábitos</p>
            </Link>
            
            <Link to='/hoje'>
            <img src={Circle}/>
            </Link>
        {/*    <CircularProgressbar
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
      />*/}
           <Link>
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
`