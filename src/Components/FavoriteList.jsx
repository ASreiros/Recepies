import { useContext } from "react";
import DishesContext from "../Contexts/DishesContext";
import FavDish from "./FavDish";


export default function FavoriteList(){
    
    const Arr =useContext(DishesContext);
    const dishesArr=Arr[3]

    console.log(dishesArr);

    return(
        <div className={(dishesArr.length===0)?"noshow":"offers"}>
            {
                dishesArr.map((dish, i)=>{
                        return(
                           <FavDish key={i} dish={dish} />
                        )   
                })
            }
        </div>
    )
} 