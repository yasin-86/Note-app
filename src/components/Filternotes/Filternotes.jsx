import { useState } from "react";
import Button from "../Button/Button";
import "./Filternotes.css";

const data =[
        {title: "All" , id: 1 },
        {title: "Complete" , id: 2 },
        {title: "UnComplete" , id: 3 },
    ]
function Filternotes() {
    
    const [active,setActive] = useState(1)
    const handleactive=(id)=>{
        setActive(id)
    }
    return(
    <div className="Filter">
        {data.map((item)=>(
        <Button
        key={item.id}
        text={item.title}
        isactive={item.id == active ? true : false}
        onClick={()=> handleactive(item.id)}
        />
        ))}
        
    </div>    
    )
}
export default Filternotes;