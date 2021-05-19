import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Circle from '../images/menuCircle.svg'
export default function Menu(){
    return(
        <MenuContainer>
            <Link>
                <p>Hábitos</p>
            </Link>
            
            <img src={Circle}/>

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

 p{
     
     color:#52B6FF;
 }

 img{
     margin-bottom:50px;
 }
`