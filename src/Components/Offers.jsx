import { useContext } from "react";
import DishesContext from "../Contexts/DishesContext";
import Offer from "./Offer";

export default function Offers(){
    
    const Arr =useContext(DishesContext);
    const dishesArr=Arr[1]

    return(
        <div className={(dishesArr.length===0)?"noshow":"offers"}>
            {
                dishesArr.map((dish, i)=>{
                    if(i<10){
                        return(
                           <Offer key={i} dish={dish} />
                        )
                    }
                })
            }
        </div>
    )
} 