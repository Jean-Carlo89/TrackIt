import Login from './Components/Login'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
import Habits from './Components/Habits/Habits'
import {useState} from 'react'
import Today from './Components/Today/Today'

import TokenContext from './Contexts/TokenContext'
export default function App(){

    const [token,setToken] = useState(null)
    const [image,setImage] = useState(null)
    return (
        <TokenContext.Provider value={token}>
            <BrowserRouter>
                <Switch>
                
                    
                    <Route path='/' exact>
                        <Login token={token} setToken={setToken} image={image} setImage={setImage}/>
                    </Route>

                    <Route path='/cadastro' exact>
                        <SignIn />
                    </Route>

                
                    <Route path='/habitos' exact>
                        <Habits />
                    </Route>

                    <Route path='/hoje' exact>
                        <Today/>
                    </Route>
                    
                    

                
                </Switch>
            </BrowserRouter>
        </TokenContext.Provider> 
       
    )

}


