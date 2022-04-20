
import { useEffect, useState } from 'react';
import {BrowserRouter, Link, Route,  Routes} from 'react-router-dom';
import './App.scss';
import FavoriteList from './Components/FavoriteList';
import Search from './Components/Search';
import DishesContext from "./Contexts/DishesContext";


function App() {
const [dishes, setDishes] = useState([])
const [favDishes, setFavDishes] = useState([])


useEffect(()=>{
  let data = JSON.parse(localStorage.getItem("meals"))
  if(data===null){
    localStorage.setItem("meals", JSON.stringify([]))
  }else{
    setFavDishes(data)
  }
}, [])


useEffect(()=>{
if(favDishes.length>0){
localStorage.setItem("meals", JSON.stringify(favDishes))
}
}, [favDishes])
  

  return (
    <BrowserRouter>
      <DishesContext.Provider value={[setDishes, dishes, setFavDishes,  favDishes]}>
        <div className="App">
          <h1>Recepies</h1>
          <div className='horizontal-holder'>
            <Link to="/" className='control-btn'>Search</Link>
            <Link to="/favorite" className='control-btn'>Favorite recepies</Link>
          </div>
          <Routes>
            <Route path='/' element={<Search></Search>}></Route>
            <Route path='/favorite' element={<FavoriteList></FavoriteList>}></Route>
          </Routes> 

        </div>
      </DishesContext.Provider>
    </BrowserRouter>
  );
}

export default App;


