import { useContext, useState } from "react";
import DishesContext from "../Contexts/DishesContext";

export default function Offer({dish}){
    const [fav, setFav] = useState(false)

    const Arr =useContext(DishesContext);
    const favDishSet=Arr[2]
    


    const favoriteHandler =()=>{
        setFav(true)
        favDishSet(arr=> [...arr, dish])
    }

    console.log(dish);
    return(
        <div className="dish">
            <h2>{dish.strMeal}</h2>
            <img src={dish.strMealThumb} alt={dish.strMeal} />
            <p>{dish.strInstructions}</p>
            <button onClick={favoriteHandler} className={fav?"noshow":"favorite"}>Add to favorites</button>
            <p className={fav?"favorited":"noshow"}>Added to favorites</p>
            <div className="ingridients-holder">
                <div>
                    {Object.keys(dish).map((key,i)=>{
                                    if(key.substring(0, 13 )=== 'strIngredient' && dish[key]!=='' && dish[key]!==null){
                                        return  <p key={i}>{dish[key]}</p>
                                    }
                                })}
                </div>
                <div>
                    {Object.keys(dish).map((key,i)=>{
                                        if(key.substring(0, 10 )=== 'strMeasure' && dish[key]!=='' && dish[key]!==null){
                                            return  <p key={i}>{dish[key]}</p>
                                        }
                                    })}
                </div>                
            </div>                    
        </div>
        
    )
}