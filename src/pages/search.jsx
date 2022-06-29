import { useState,useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { CuisineContext } from "../context/cuisineContext";
import {useLocation} from 'react-router'

function Search() {
    const apiKey = "9c0a9a261144444695bf68a87e5cb7e2";
    let value = useContext(CuisineContext);
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    async function getData(name){
       let res = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=9c0a9a261144444695bf68a87e5cb7e2&query=${name}&number=20`)
       let data = await res.json()
       console.log(data.results);
       setData(data.results)
       setLoading(false);
    }
    useEffect((()=>{
        console.log('changed');
        getData(value.P)
        setLoading(true)
    }),[value.P])
    console.log(value.P);
    return ( 
        <main className="showcase">
            <h1 className='type'>{value.P}:</h1>
            {
                isLoading === true ? <h1>Loading...</h1>:
                    data?.length===0 ? <h1>Not Found</h1>:
                        data !== null && data.length != 0 &&
                        data.map(e=> 
                        <NavLink 
                                className="img-card"
                                style={{"backgroundImage":`url(${e.image})`}}
                                to={`/find/${e.id}`}
                                onClick ={()=>{
                                    value.setSelectedDish(e.id)
                                }}
                        >
                                <div >
                                    <h6>{e.title}</h6>
                                </div>
                        </NavLink>
                    )
            
            }
            </main>
     );
}

export default Search;

