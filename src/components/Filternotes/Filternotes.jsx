import Button from "../Button/Button";
import "./Filternotes.css";


function Filternotes({data,active,handleactive}) {
    
    
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