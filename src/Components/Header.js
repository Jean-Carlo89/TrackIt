import styled from 'styled-components'
import imgHeader from '../images/imgHeader.svg'
import profile from '../images/bobesponja.jpeg'
import {useContext} from 'react'
import TokenContext from '../Contexts/TokenContext'

export default function Header(){
    const{token,image} = useContext(TokenContext)
    return(
        <HeaderContainer>
            <div>
            <img  src={imgHeader}/>

            <img className = 'profile' src={image}/>
            </div>

        </HeaderContainer>
    )
}


const HeaderContainer = styled.header`
    min-width:375px;
    width:100%;
    height:70px;
    background-color:#126BA5;
    display:flex;
    justify-content:center;
    position:fixed;
    top:0;
    right:0;
    z-index:85;
    

    div{
       // border:1px solid red;
        width:95%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
       
    }

    
    

    .profile{
        width:50px;
        height:50px;
        border-radius:50%
    }
`