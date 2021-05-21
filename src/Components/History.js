import Menu from './Menu'
import Header from './Header'
import styled from 'styled-components'
export default function History(){
    return(
       <Background>
        <Header/>
            <Container>
            <HistoryInfo>
                    <div>
                    <h1>Histórico</h1>
                    <h2 >Em breve você poderá ver o histórico dos seus hábitos aqui</h2>
                    </div>
                </HistoryInfo>
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
        height: auto;
       
        flex-direction:column;
        margin-top:70px;
        align-items:center;
        margin-bottom:60px ;
`

const HistoryInfo = styled.div`
    width: 100%;
    height: 100px;
    
    display: flex;
    flex-direction: column;
   justify-content: center;

        div{
            height: 80px;
           
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 370px;

        }

        h1{
            color: #126BA5;
            font-size: 23px;
        }

        h2{
            font-size: 22px;
            color: #666666;

        }

        h2.selected{
            color: green;
        }

`