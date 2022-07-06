import { CuisineContext } from '../context/cuisineContext';
import { useContext, useEffect, useState } from 'react';

import { NavLink,useNavigate } from 'react-router-dom';
function SideBar() {
  const cuisine = ["indian","italian","chinese","Mediterranean","European"]
  const [search,setSearch] = useState('')
  const value = useContext(CuisineContext);
  const navigate = useNavigate()
  
    useEffect((
        ()=>console.log("ckcdd")
    ),[search])
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
          navigate("/search/"+search)
          value.setP(search)
          event.target.value = ""
        }
      }
    return ( 
        <section className="sidebar">
            <div className="list">
            <h1>Cuisines:</h1>
                    <input  
                        onKeyPress={handleKeyPress}
                        onChange={(e)=>setSearch(e.target.value)}
                        className="cusine-inp"
                        type="text"
                        placeholder='search for dishes.........'
                         />
                {cuisine.map(e=><NavLink to={'/'}>
                    <button
                    value={e} 
                    onClick={eve=>value.setCuisine(e)}
                >{e}</button>
                </NavLink>)}
            </div>
        </section>
     );
}

export default SideBar;
