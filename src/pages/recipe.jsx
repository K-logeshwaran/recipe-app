import { useEffect,useContext, useState } from "react";
import DetailsRec from "../components/recipeDetail";
import { CuisineContext } from "../context/cuisineContext";

function Recipe() {
    let value = useContext(CuisineContext);
    const  [data,setData] = useState("")
    async function getProcedure(id,setter){
        console.log(String(id));
        let cache = sessionStorage.getItem(String(id))
        console.log(cache);
        if(cache){
            setter(JSON.parse(cache))
        }else{
            let res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=9c0a9a261144444695bf68a87e5cb7e2`)
            let data = await res.json()
            sessionStorage.setItem(String(id),JSON.stringify(data))
            setData(data)
        }
        console.log(data);
    }
    useEffect((
        ()=>{
            console.log(value.selectedDish);
            getProcedure(value.selectedDish,setData)
            console.log(value.selectedDish);
        }
        
    ),[value.selectedDish])
    console.log(data);
    return ( 
        <>
            { data &&
                <DetailsRec
                img={data.image}
                summary = {data.summary}
                Procedure = {data.analyzedInstructions[0].steps}
               />
            }{
                !data && <h1>loading</h1>
            }

            
        </>
       
     );
}

export default Recipe;



