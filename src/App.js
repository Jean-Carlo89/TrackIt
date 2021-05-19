import Main from './Components/Main'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
import {useState} from 'react'
export default function App(){

    const [token,setToken] = useState(null)
    return (
    
        <BrowserRouter>
            <Switch>
                
                <Route path='/' exact>
                    <Main token={token} setToken={setToken}/>
                </Route>

                <Route path='/cadastro' exact>
                    <SignIn />
                </Route>
            
            </Switch>
        </BrowserRouter>
       
    )

}


