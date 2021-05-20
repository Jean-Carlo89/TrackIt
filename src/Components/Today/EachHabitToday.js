import {FaCheckSquare} from 'react-icons/fa';

export default function EachHabitToday({habit}){

    return(

        <li >
            <h1>{habit.name}</h1>
            <h3>Sequencia atual: {habit.currentSequence}</h3>
            <h3>Seu recorde: {habit.highestSequence}</h3>
            <button>< FaCheckSquare/></button>
        </li>
    )
}