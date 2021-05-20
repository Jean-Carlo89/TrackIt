
import {useState} from 'react'
export default function EachDay({day,days,setDays,key,id,cancel,setCancel,loading}){
    const [isSelected,setIsSelected] = useState(false)
   // console.log(id)
    
   
   
   /*function checkCancel(){
   if(cancel){
       setIsSelected(false)
   }
}*/
    
   function selectDays(dayNumber){
       setCancel(false)
        
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
        <button disable={loading} className={`days ${cancel ? '' : (isSelected ? 'selected' : 'white')}`}   onClick={()=>selectDays(id)}>
            {day}
        </button>
    )
}