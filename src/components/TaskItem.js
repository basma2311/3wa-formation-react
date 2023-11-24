import { FcFullTrash } from "react-icons/fc";

export default function TaskItem(props){
    console.log(props);
    return(
        <li className= "flex items-center justify-between  bg-slate-100 text-center py-4 rounded shadow shadow-slate-400">
            {props.name}
            <FcFullTrash className="w-6 h-6"  onClick={props.removeItem}/>
            </li>
            
    )
        
}