import {LIST_NAMES} from "./ENUMS.tsx";
import { Dispatch, SetStateAction } from "react";


interface IProps{
    listName: string,                               
    setListName: Dispatch<SetStateAction<string>>,  //In cra, the datatype 'Function' is enough
}
export default function Dropdown(props:IProps){
    return(
        <select value={props.listName} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {props.setListName(e.target.value)}}>
            <option value={LIST_NAMES[LIST_NAMES.FINISHED]}>        {LIST_NAMES[LIST_NAMES.FINISHED]}       </option>
            <option value={LIST_NAMES[LIST_NAMES.INTERESTING]}>     {LIST_NAMES[LIST_NAMES.INTERESTING]}    </option>
            <option value={LIST_NAMES[LIST_NAMES.READING]}>         {LIST_NAMES[LIST_NAMES.READING]}        </option>
        </select>
    )
}