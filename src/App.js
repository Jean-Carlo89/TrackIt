import Login from './Components/Login'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SignIn from './Components/SignIn'
import Habits from './Components/Habits/Habits'
import {useState} from 'react'
import Today from './Components/Today/Today'
import History from './Components/History'

import TokenContext from './Contexts/TokenContext'
import PercentageContext from './Contexts/PercentageContext'
export default function App(){

    const [token,setToken] = useState(null)
    const [image,setImage] = useState(null)
    const [habitsList,setHabitsList] = useState([])
    const [completedHabits,setCompletedHabits] = useState([])
    const[percentage,setPercentage] = useState(0)
    return (
        <TokenContext.Provider value={token}>
            <PercentageContext.Provider value={{habitsList,completedHabits}}>
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
                            <Today habitsList={habitsList} 
                            setHabitsList={setHabitsList} 
                            completedHabits={completedHabits}
                            setCompletedHabits={setCompletedHabits}
                            />
                        </Route>
                        
                        <Route path='/historico' exact>
                            <History/>
                        </Route>
                        

                    
                    </Switch>
                </BrowserRouter>
            </PercentageContext.Provider> 
        </TokenContext.Provider> 
       
    )

}


