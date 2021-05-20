
import {useState} from 'react'
export default function EachDay({day,days,setDays,key,id}){
    const [isSelected,setIsSelected] = useState(false)
   // console.log(id)
    
    function selectDays(dayNumber){
       
        
       if(isSelected){
            const newArray = days.filter((item)=>(item!==dayNumber))
            
            isSelected ? setIsSelected(false) : setIsSelected(true)
            setDays(newArray)
            
            return
        }

        
        
        isSelected ? setIsSelected(false) : setIsSelected(true)
        
        console.log(dayNumber)
        
        setDays([...days,dayNumber])
    }
    
    return(
        <div className={`days ${isSelected ? 'selected' : ''}`}  onClick={()=>selectDays(id)}>
            {day}
        </div>
    )
}