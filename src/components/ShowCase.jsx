import {useEffect, useState} from 'react'
import { fetchByCusine, fetchType } from '../service/Allfetch'; 
import { CuisineContext } from '../context/cuisineContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function ShowCase() {
    const value = useContext(CuisineContext)
    const [isLoading,setLoading] = useState(true);
    console.log(value);
    if(typeof value.cusinesDish ==='string' ){
        value.cusinesDish = JSON.parse(value.cusinesDish)};
    useEffect(( 
        ()=>{
            // problem is here
            console.log(value.cusinesDish);
            if(value.cusine !== 'Veg' & value.cusine !== 'Non-Veg' ){
                fetchByCusine(value.setCuisineDish,value.cusine)
                value.setCuisine(value.cusine)
                console.log(value.cusinesDish);
                setLoading(false)
                if(typeof value.cusinesDish ==='string' ){
                value.cusinesDish = JSON.parse(value.cusinesDish)};
                fetchType();
            }else{
                if(value.cusine === 'Veg'){
                    let data =JSON.parse(sessionStorage.getItem('veg'))
                    value.setCuisineDish(data.recipes)
                    setLoading(false)
                }else{
                    let data =JSON.parse(sessionStorage.getItem('nonveg'))
                    value.setCuisineDish(data.recipes)
                    setLoading(false)
                }
            }
           
        }
    ),[value.cusine])
    return ( 
        <>
            <main className="showcase">
            <h1 className='type'>{value.cusine}:</h1>
            { 
                isLoading === true ? <h1>Loading..</h1>
                :
                value.cusinesDish != null & typeof value.cusinesDish !='string' &&
                    value.cusinesDish.map(e=> 
                       <NavLink 
                            className="img-card"
                            style={{"backgroundImage":`url(${e.image})`}}
                            //to={'/find'}
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
        </>
     );
}

export default ShowCase;