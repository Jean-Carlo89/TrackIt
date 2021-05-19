import Login from './Components/Login'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
import Habits from './Components/Habits/Habits'
import {useState} from 'react'

export default function App(){

    const [token,setToken] = useState(null)
    return (
    
        <BrowserRouter>
            <Switch>
                
                <Route path='/' exact>
                    <Login token={token} setToken={setToken}/>
                </Route>

                <Route path='/cadastro' exact>
                    <SignIn />
                </Route>

                <Route path='/habitos' exact>
                    <Habits />
                </Route>
            
            </Switch>
        </BrowserRouter>
       
    )

}


