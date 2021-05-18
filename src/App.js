import Main from './Components/Main'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
export default function App(){
    return (
    
        <BrowserRouter>
            <Switch>
                
                <Route path='/' exact>
                    <Main />
                </Route>

                <Route path='/cadastro' exact>
                    <SignIn />
                </Route>
            
            </Switch>
        </BrowserRouter>
       
    )

}


