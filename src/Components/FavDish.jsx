import { useContext, useState } from "react";
import DishesContext from "../Contexts/DishesContext";

export default function FavDish({dish}){

    const Arr =useContext(DishesContext);
    const favDishSet=Arr[2]
    const favDishArr=Arr[3]
    


    const deleteHandler =()=>{
       const data = [];
       favDishArr.forEach(obj=>{
           if(obj.idMeal !== dish.idMeal){
               data.push(obj)
           }
       })
        favDishSet(data)
    }

    console.log(dish);
    return(
        <div className="dish">
            <h2>{dish.strMeal}</h2>
            <img src={dish.strMealThumb} alt={dish.strMeal} />
            <p>{dish.strInstructions}</p>
            <button onClick={deleteHandler} className="favorite">Delete from favorites</button>
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