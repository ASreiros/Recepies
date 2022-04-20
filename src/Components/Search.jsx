import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Offers from "./Offers"
import DishesContext from "../Contexts/DishesContext";



export default function Search() {

    const [search, setSearch] = useState("")
    const [searchStatus, setSearchStatus] =useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        setSearchStatus(true)
        setSearch("")
    }, [])

    const Arr =useContext(DishesContext);
    const disheslist=Arr[0]

    const searchHandler = e=>{
        
       setSearch(e.target.value)
        if(e.target.value.length>2){
            setSearchStatus(false)
        } else{
            setSearchStatus(true)
        }
    }

    const searchClickHandler = ()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>{
            
            
            console.log(res.data.meals);
            if(res.data.meals===null){
                setError("No dish with that name was found")
                setSearch("")
            }else{
                setError("")
                disheslist(res.data.meals)
            }

           
        })
        .catch((error)=>{
            console.log(error);
            setError("Something went wrong with your search. Please try again.")

        })           
    }


    return(
        <>
            <div className="search-container">
                <div className="search-holder">
                    <input type="text" onChange={searchHandler} placeholder="search here" value={search} />
                    <button onClick={searchClickHandler} disabled={searchStatus}>Search</button>
                </div>
                
                
            </div>
            <p>{error}</p>
            <Offers></Offers>
        </>     
    )
    
}