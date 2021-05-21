
import {useState} from 'react'
export default function EachDay({day,style,selectDays,id}){
    
   // console.log(id)
    
   
   
   /*function checkCancel(){
   if(cancel){
       setIsSelected(false)
   }
}*/
    
 
    
    return(
        <div className={style} onClick={()=>selectDays(id)}>
            {day}
        </div>
    )
}