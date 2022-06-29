import { useState } from 'react';
import NavBar from './components/navBar';
import Recipe from './pages/recipe';
import Home from './pages/home';
import ShowCase from './components/ShowCase';
import SideBar from './components/sidebar';
import { CuisineContext } from './context/cuisineContext';
import { Routes, Route, Link } from "react-router-dom";
import Search from './pages/search';
function App() {
    const [cusinesDish,setCuisineDish] = useState();
    const [cusine,setCuisine] = useState("italian");
    const [selectedDish,setSelectedDish] = useState(null);
    let [P,setP] = useState("");
    
  return (
    <CuisineContext.Provider value={{cusine,cusinesDish,setCuisine,setCuisineDish,selectedDish,setSelectedDish,P,setP}}>
      <NavBar/>
      <div className="grid">
            <SideBar/>
            <Routes>
              <Route path="/" element={<ShowCase/>} />
              <Route path="/find/:id" element={<Recipe/>} />
              <Route path="/search/:search" element={<Search/>} />
            </Routes>
        </div>
    </CuisineContext.Provider>
  );
}



export default App;
